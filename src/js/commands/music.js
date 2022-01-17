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
        var uwu, col;

        if (choice === "lyrics") {
            if (song === null) return message.reply("you must give me a song to find the lyrics for");

            const search = await geniusClient.songs.search(song);

            const theSong = search[0];

            var theLyrics = await theSong.lyrics();

            if(theLyrics.toString().length > 4096) {
                uwu = `the lyrics to ${song} is greater than 4096 characters in length. Here is a link to your search query: https://genius.com/search?q=${song}`;
                col = '0x9c4444';
            }

            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setColor(theLyrics.toString().length > 4096 ? col : '0xada8a0')
                    .setTitle(theLyrics.toString().length > 4096 ? `Lyrics for ${song} too long` : `Top result for ${song}`)
                    .setDescription(theLyrics.length > 4096 ? uwu : theLyrics.toString())
                    .setFooter({ text: "Lyrics sourced from genius.com" })
                ]
            });
        }
    }
});