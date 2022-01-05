const fs = require('fs');
const httpGet = require('../../../secrets/httpGet');
const puppeteer = require('puppeteer');
const Command = require('../classes/Command');
const Discord = require('discord.js');

module.exports = new Command({
    name: "web",
    description: "base command for some web based commands!",

    async run(message, args, client) {
        const com = args[1] || null;
        const webURL = args[2] || null;

        if (com === null) return message.reply("missing args"); //fix later

        if (com === "screenshot" || com === "sc") {
            const fp = (args[3] === 'true')  || false;
            var am = fs.readdirSync('./secrets/temp').length;

            if (webURL === null) return message.reply("you must give me the url of the website to take a screenshot of!");

            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            page.setViewport({ width: 1920, height: 1080 });

            await page.goto(webURL.includes("https://") ? webURL : `https://${webURL}`);

            var sc = await page.screenshot({
                path: `./secrets/temp/screenshot${am}.png`,
                type: 'png',
                fullPage: fp
            });

            await message.channel.send({
                content: `Screenshot of ${webURL}. Resolved in: ${Math.round((new Date().getTime() - message.createdTimestamp) / 1000)} seconds.`,
                files: [`./secrets/temp/screenshot${am}.png`]
            });

            await browser.close();

            fs.unlinkSync(`./secrets/temp/screenshot${am}.png`);
        }
    }
});