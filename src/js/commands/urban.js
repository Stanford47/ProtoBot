const Discord = require('discord.js');
const Command = require('../classes/Command');
const puppeteer = require('puppeteer');

module.exports = new Command({
    name: "urban",
    description: "gets a definition for a word from the urban dictionary",

    async run(message, args, client) {
        const word = args[1] || null;
        var nWord = word;

        if(word === null) return message.reply("you must give me a word to find the definition of!");

        if(word.includes("#")) nWord = word.replace("#", "%23");
        else if(word.includes("%")) nWord = word.replace("%", "%25");

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