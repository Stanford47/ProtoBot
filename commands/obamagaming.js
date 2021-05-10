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
    /*
    OLD VER.
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
        */
       //NEW VER.
       function FileSent() {

            //file sorting
           let fileName = ""
           let Dir = ""

           //RNGS               
            let pRNG = Math.round((Math.random()*119)+1)
            let fRNG = Math.round(Math.random()*74)
            let PorU = Math.round(Math.random()*2)

           //proto or norm
           if(PorU == 0) {
               fileName = "p" + pRNG + ".jpg"
               Dir = "C:/Users/jaelt/yoff/pics/proto/" + fileName
           } else {
                fileName = fRNG + ".jpg"
                Dir = "C:/Users/jaelt/yoff/pics/unsorted/" + fileName
           }

           //file attatchment setup
           let File = new Discord.MessageAttachment()
           .setFile(Dir)

           //message logic
           if(!msg.channel.nsfw) {
               msg.reply(owo.translate("i cant post nsfw in here!"))
           } else if(msg.channel.nsfw) {
               msg.channel.send(File)
           }
       }

       if(msg.content.startsWith(prefix) && msg.content.endsWith("yoff") || msg.content.endsWith("yiff")) {
           FileSent();
       }
});
client.login(botToken)
//me when i am remaking it again...  ._.