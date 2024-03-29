const Discord = require('discord.js');
const Command = require('../classes/Command');
const puppeteer = require('puppeteer');

module.exports = new Command({
    name: "urban",
    description: "gets a definition for a word from the urban dictionary",

    async run(message, args, client) {
        const word = args.slice(1).join(" ") || null;
        var nWord = "";

        if (word === null) return message.reply("you must give me a word or phrase to find the definition of!");
        
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === '#') {
                word.charAt(i).replace('#', '%23');
            } else if (word.charAt(i) === ' ') {
                word.charAt(i).replace(' ', '+');
            } else if (word.charAt(i) === '&') {
                word.charAt(i).replace('&', '%26');
            }
        }

        nWord = word;

        const browser = await puppeteer.launch();
        const newPage = await browser.newPage();

        await newPage.goto(`https://www.urbandictionary.com/define.php?term=${nWord}`);

        const content = await newPage.$eval('body', eval => document.body.getElementsByTagName('div')[0].innerText.split(/\n/g)[4]);

        message.channel.send({
            embeds: [new Discord.MessageEmbed()
                .setColor('0xc9b9b9')
                .setTitle(`Definition of ${word.toLowerCase()}`)
                .addFields(
                    {name: "Definition", value: content}
                )
                .setFooter({ text: `Resolved in ${Math.round((new Date().getTime() - message.createdTimestamp) / 1000)} seconds` })
            ]
        });

        await browser.close();
    }
});