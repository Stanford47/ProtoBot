//oh boy im remaking the nsfw command ._.
//this should be "fun"
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json');
client.on('ready', () => {
    console.log('ready');
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    function wowthisissupercoolwhyamimakingthisnamesolonglol(colour, fileType, directory, fileName, fullDir) {
        let colourRNG = Math.round(Math.random() *4);
        let poru = Math.round(Math.random() *2);
        let fileSuffix = Math.round(Math.random() *16);
        let filePrefix = Math.round(Math.random() *4);
        let P = Math.round((Math.random() *106) +1)
        let oops = Math.round((Math.random() *14) +1)
        if(poru == 0) {
            filePrefix = "p"
            fileSuffix = P
            fileName = filePrefix + fileSuffix
            if(fileSuffix !== 43 || 52 || 54 || 98 || 99 || 104) {
                fileType = ".jpg"
            } else {
                fileType = ".png"
            }
            fileName = fileName + fileType
            directory = "proto/"
        } else if(poru == 1) {
            if(filePrefix == 3 && fileSuffix > 8) {
                fileSuffix = fileSuffix - oops
            }
            if(fileSuffix > 9) {
                switch(fileSuffix) {
                    case 10:
                        fileSuffix = "A"
                        break;
                    case 11:
                        fileSuffix = "B"
                        break;
                    case 12:
                        fileSuffix = "C"
                        break;
                    case 13:
                        fileSuffix = "D"
                        break;
                    case 14:
                        fileSuffix = "E"
                        break;
                    case 15:
                        fileSuffix = "F"
                        break;
                }
            }
            fileName = filePrefix + "" + fileSuffix
            if(fileName !== "00" || "01" || "02" || "03" || "04" || "05") {
                fileType = ".jpg"
            } else {
                fileType = ".png"
            }
            fileName = fileName + fileType
            directory = "unsorted/"
        }
        fullDir = "C:/Users/jaelt/yoff/pics/" + directory + fileName
        const yoff = new Discord.MessageAttachment()
        .setFile(fullDir)
        if(!msg.channel.nsfw) {
            msg.channel.send(owo.translate("this channel is not set to nsfw -_-"))
        } else if(msg.channel.nsfw) {
        msg.channel.send(yoff)
        }
    }
        if(msg.content.startsWith(prefix) && msg.content.endsWith("yoff") || msg.content.endsWith("yiff")) {
        wowthisissupercoolwhyamimakingthisnamesolonglol();
        }
});
client.login(botToken)
//holy fucking shit I DID IT YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// i have never been so proud but dissapointed in my self before lmao