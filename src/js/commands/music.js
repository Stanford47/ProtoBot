const Discord = require('discord.js');
const Command = require('../classes/Command');
const Genius = require('genius-lyrics');

module.exports = new Command({
    name: "music",
    description: "base command for music",

    async run(message, args, client) {
        const choice = args[1] || null;
        const song = args.slice(2).join(" ") || null
        const geniusClient = new Genius.Client();

        if (choice === "lyrics") {
            if (song === null) return message.reply("you must give me a song to find the lyrics for");

            const search = await geniusClient.songs.search(song);

            const theSong = search[0];

            const theLyrics = await theSong.lyrics();

            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setColor('0xada8a0')
                    .setTitle(`Lyrics for ${song}`)
                    .setDescription(theLyrics.toString())
                    .setFooter({ text: "Lyrics sourced from genius.com" })
                ]
            });
        }
    }
});