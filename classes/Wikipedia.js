const Discord = require("discord.js")
const fetch = require("axios")

class Wikipeida {
    constructor(options) {
        if (!options.color) throw new TypeError('Missing arugment color in wikipedia function.')
        if (typeof options.color !== 'string') throw new TypeError('Color must be a string in wikipedia function.')
        if (!options.query) throw new TypeError('Missing arugment query in wikipedia function.')
        if (typeof options.query !== 'string') throw new TypeError('query must be a string in wikipedia function.')
        if (!options.language) throw new TypeError('Missing arugment language in wikipedia function.')
        if (typeof options.query !== 'string') throw new TypeError('Language must be a string in wikipedia function.')
        if (!options.message) throw new TypeError('Missing arugment \'message\' in wikipedia function.')
        if (options.message) throw new TypeError('Exceeded arugment, you cannot have \'message\' at the same time in wikipedia function.')

        this.message = options.message
        this.color = options.color
        this.query = options.query
        this.language = options.language
    }
    async() {
        let wiki = await fetch(`https://${this.language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(this.query)}`)
            .catch(() => {
                message.reply("❌ No result. Try again with another language!");
            })

        if (wiki.data.type === "disambiguation") {
            try {
                message.channel.send({
                    embeds: [
                        new Discord.MessageEmbed()
                            .setTitle(`${wiki.data.title}`)
                            .setColor(this.color)
                            .setURL(`${wiki.data.content_urls.desktop.page}`)
                            .setThumbnail(`${wiki.data.thumbnail.source}`)
                            .setTimestamp()
                            .setFooter({
                                text: `Requested by ${message.author.username}`,
                                iconURL: message.author.displayAvatarURL()
                            })
                    ]
                })
            } catch {
                message.reply("❌ No result. Try again with another language!")
            }
        } else {
            try {
                message.channel.send({
                    embeds: [
                        new Discord.MessageEmbed()
                            .setTitle(`${wiki.data.title}`)
                            .setColor("RANDOM")
                            .setURL(`${wiki.data.content_urls.desktop.page}`)
                            .setThumbnail(`${wiki.data.thumbnail.source}`)
                            .setDescription(`${wiki.data.extract}`)
                            .setTimestamp()
                            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
                    ]
                })
            } catch {
                message.reply("❌ No result. Try again with another language!")
            }
        }
    }
}
module.exports = Wikipeida