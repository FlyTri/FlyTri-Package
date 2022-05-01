const Discord = require("discord.js")
const fetch = require("axios")
const moment = require("moment")

try {
    require.resolve("discord.js")
} catch (e) {
    throw new Error("Cannot find module 'discord.js' Please do 'npm i discord.js'")
}

try {
    require.resolve("axios")
} catch (e) {
    throw new Error("Cannot find module 'axios' Please do 'npm i axios'")
}

class NPMinfo {

    constructor(options) {
        if (!options.color) throw new TypeError('Missing arugment color in npm info function.')
        if (typeof options.color !== 'string') throw new TypeError('Color must be a string in npm info function.')
        if (!options.name) throw new TypeError('Missing arugment name in npm info function.')
        if (typeof options.name !== 'string') throw new TypeError('name must be a string in npm info function.')
        if (!options.message) throw new TypeError('Missing arugment \'message\' in npm info function.')

        this.message = options.message
        this.color = options.color
        this.name = options.name
    }
    async fetch() {
        let npm;
        let size

        try {
            npm = await fetch(`https://registry.npmjs.com/${this.name}`)
            size = await fetch(`https://packagephobia.now.sh/api.json?p=${encodeURIComponent(this.name)}`)
        } catch {
            if (this.message) this.message.reply("No result found!")
            return
        }

        let version = npm.data.versions[npm.data["dist-tags"].latest];
        let deps = version.dependencies ? Object.keys(version.dependencies) : null;
        let maintainers = npm.data.maintainers.map((user) => user.name);

        if (maintainers.length > 10) {
            const len = maintainers.length - 10;
            maintainers = maintainers.slice(0, 10);
            maintainers.push(`...${len} more.`);
        }

        if (deps && deps.length > 10) {
            const len = deps.length - 10;
            deps = deps.slice(0, 10);
            deps.push(`...${len} more.`);
        }

        const suffixes = ["Bytes", "KB", "MB", "GB"]
        function getBytes(bytes) {
        let i = Math.floor(Math.log(bytes) / Math.log(1024));
        return (!bytes && "0 Bytes") || `${(bytes / Math.pow(1024, i)).toFixed(2)} ${suffixes[i]}`;
        }
        console.log(getBytes)

        if (this.message) this.message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                    .setTitle("NPM Package Info")
                    .setColor(this.color)
                    .setDescription(npm.data.description || "No description!")
                    .addField("General", `
                > Package Name: **${npm.data.name}**
                > HomePage: **${npm.data.homepage || "None"}**
                > Keywords: **${npm.data.keywords && npm.data.keywords.length ? npm.data.keywords.join(", ") : "None"}**
                > License: **${npm.data.license || "None"}**
                > Modified: **${moment(npm.data.time.modified).format("DD/MM/YY HH:MM:SS")}**
                > Dependencies: **${deps && deps.length ? deps.join(", ") : "None"}**
                `)
                    .setFooter({
                        text: `Requested by ${this.message.author.username}`,
                        iconURL: this.message.author.displayAvatarURL()
                    })
            ]
        })

    }
}

module.exports = NPMinfo