const fs = require('fs');
const httpGet = require('../../../secrets/httpGet');
const puppeteer = require('puppeteer');
const Command = require('../classes/Command');
const Discord = require('discord.js');
const sleep = require('../../../secrets/sleep');

module.exports = new Command({
    name: "web",
    description: "base command for some web based commands!",

    async run(message, args, client) {
        const com = args[1] || null;
        const webURL = args[2] || null;
        var fullPgSC;
        if (args[3] === "true" || args[3] === "t") fullPgSC = true;
        else if (args[3] === "false" || args[3] === "f" || args[3] === undefined) fullPgSC = false;
        else return message.reply(`${args[3]} is not an argument for this command. \`p!web sc "{domain_name}" [full_page_screenshot?]\``)
        const nfwTerms = fs.readFileSync('./secrets/settings/websitensfwterms.toaster', 'utf8').split("\n");

        if (com === null) return message.reply("missing args"); //fix later
        nfwTerms.forEach(term => {
            if(webURL.includes(term) && !message.channel.nsfw) return message.reply("this website contains nsfw content. please try it again in a text channel marked as nsfw");
        });


        if (com === "screenshot" || com === "ss") {
            var am = fs.readdirSync('./secrets/temp').length;

            if (webURL === null) return message.reply("you must give me the url of the website to take a screenshot of!");

            for(var i = 0; i < nfwTerms.length; i++) {
                if(webURL.includes(nfwTerms[i]) && !message.channel.nsfw) return message.reply("ns");
            }

            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            page.setViewport({ width: 1920, height: 1080 });
            page.setDefaultNavigationTimeout(90 * 1000);

            await page.goto(webURL.includes("https://") ? webURL : `https://${webURL}`).catch(reason => { return message.reply("i couldn\'t access the that domain for some reason. it most likely does not exist, or you mistyped the link.") });

            var sc = await page.screenshot({
                path: `./secrets/temp/screenshot${am}.png`,
                type: 'png',
                fullPage: fullPgSC
            });

            await message.channel.send({
                content: `Screenshot of ${webURL}. Resolved in: ${Math.round((new Date().getTime() - message.createdTimestamp) / 1000)} seconds.`,
                files: [`./secrets/temp/screenshot${am}.png`]
            });

            await browser.close();

            fs.unlinkSync(`./secrets/temp/screenshot${am}.png`);
        } else if (com === "source" || com === "src") {
            if (webURL === null) return message.reply("you must give me the url of the website to take a screenshot of!");

            var am = fs.readdirSync('./secrets/temp').length;

            fs.writeFileSync(`./secrets/temp/sourceCode${webURL.replace(/\.[\s\S]*$/g, "")}.html`);

        } else if (com === "image" || com === "img") {
            
        }
    }
}); // dood was here. (he didnt make this)