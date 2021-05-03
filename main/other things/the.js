const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../../devtools/json/config.json')
const {
    copypasta1,
} = require('../../devtools/json/otherschtuff.json')
client.on('ready', () =>{
    console.log("ready")
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    const horkneeHelp = new Discord.MessageEmbed()
    .setColor("#ff48df")
    .setTitle("nsfw help")
    .addFields (
        {name:"**copypasta**", value:owo.translate("I will say a cool copypasta owo")},
        {name:"**yoff**", value:owo.translate("lets be honest, its kinda obvious what this does")}
    )
    .setFooter("òwó")
    .setTimestamp()
    if(msg.content.startsWith(prefix) && msg.content.includes("nsfw") || msg.content.includes("horknee help") || msg.content.includes("nsfw help")) {
        msg.channel.send(horkneeHelp)
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
    /*
    ======== LEGACY YOFF COMMAND =======
    im keeping this in here just in case i might want to reuse this for something else
    ===================================================================================
function inquiryYG() {
    let selectionRNG = Math.round((Math.random() *2))
    let iyg = Math.floor(Math.random() *2623476) +12426
    let post = 'https://e621.net/posts/' + iyg + '?q=set%3Abestfavorites'
    let iygsecondary = Math.floor((Math.random() *1080571) +22)
    let secondarypost = 'https://e621.net/posts/' + iygsecondary + '?tags=set%3Abest_of_e621'
    if(selectionRNG < 1) {
        selectionRNG = selectionRNG + 1
    }
        if(!msg.channel.nsfw) {
            msg.channel.send(owo.translate("I cannot send nsfw posts in a non-nsfw channel..."))
        } else {
            msg.channel.send(owo.translate("OwO looks like someone is very horny"))
           if(selectionRNG === 1) {
               msg.channel.send(post)
           } else if(selectionRNG === 2) {
               msg.channel.send(secondarypost)
           }
        }
        
    }
if(msg.content.startsWith(prefix) && msg.content.endsWith("yoff") || msg.content.endsWith("yiff")) {
    inquiryYG();
}
*/
});
client.login(botToken)