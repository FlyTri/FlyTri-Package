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

try {
    require.resolve("moment")
} catch (e) {
    throw new Error("Cannot find module 'moment' Please do 'npm i moment'")
}

class Wikipedia {

    constructor(options) {
        if (!options.color) throw new TypeError('Missing arugment color in wikipedia function.')
        if (typeof options.color !== 'string') throw new TypeError('Color must be a string in wikipedia function.')
        if (!options.query) throw new TypeError('Missing arugment query in wikipedia function.')
        if (typeof options.query !== 'string') throw new TypeError('query must be a string in wikipedia function.')
        if (!options.language) throw new TypeError('Missing arugment language in wikipedia function.')
        if (typeof options.language !== 'string') throw new TypeError('Language must be a string in wikipedia function.')
        if (!options.message) throw new TypeError('Missing arugment \'message\' in wikipedia function.')

        this.message = options.message
        this.color = options.color
        this.query = options.query
        this.language = options.language
    }
    async fetch() {
        let wiki;

        try {
            wiki = await fetch(`https://${this.language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(this.query)}`)
        } catch (e) {
            if (this.message) this.message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setTitle(`❌ Oops, something went wrong!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                        .setDescription(`\`\`\`${e}\`\`\``)
                        .setFooter({
                            text: `Requested by ${this.message.author.username}`,
                            iconURL: this.message.author.displayAvatarURL()
                        })
                ]
            })
            throw new Error(e)
        }

        if (wiki.data.type === "disambiguation") {
            try {
                if (this.message) this.message.channel.send({
                    embeds: [
                        new Discord.MessageEmbed()
                            .setTitle(`🌎 ${wiki.data.title}`)
                            .setColor(this.color)
                            .setURL(`${wiki.data.content_urls.desktop.page}`)
                            .setThumbnail(`${wiki.data.thumbnail.source}`)
                            .setTimestamp()
                            .setFooter({
                                text: `Requested by ${this.message.author.username}`,
                                iconURL: this.message.author.displayAvatarURL()
                            })
                    ]
                })
            } catch {
                if (this.message) this.message.reply("❌ No result. Try again with another language!")
            }
        } else {
            try {
                if (this.message) this.message.channel.send({
                    embeds: [
                        new Discord.MessageEmbed()
                            .setTitle(`${wiki.data.title}`)
                            .setColor("RANDOM")
                            .setURL(`${wiki.data.content_urls.desktop.page}`)
                            .setThumbnail(`${wiki.data.thumbnail.source}`)
                            .setDescription(`${wiki.data.extract}`)
                            .setTimestamp()
                            .setFooter({
                                text: `Requested by ${this.message.author.username}`,
                                iconURL: this.message.author.displayAvatarURL()
                            })
                    ]
                })
            } catch {
                if (this.message) this.message.reply("❌ No result. Try again with another language!")
            }
        }
    }
}

module.exports = Wikipedia