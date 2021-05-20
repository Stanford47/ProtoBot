const Discord = require('discord.js');
const owo = require('@zuzak/owo')
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
const {
    copypasta1,
    copypasta2,
} = require('../devtools/json/otherschtuff.json')
client.on('ready', () =>{
    console.log('ready')
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    const basedMSG = new Discord.MessageAttachment()
    .setFile('C:/Users/jaelt/funni/based.mp4')
    if(msg.content.includes("based on what")) {
        msg.channel.send(basedMSG);
    }
    function copypastas() {
        let copypastarng = Math.round((Math.random() *1) +1)
        console.log(copypastarng)
        if(copypastarng === 1) {
            msg.channel.send(copypasta1)
        } else if(copypastarng === 2) {
            msg.channel.send(copypasta2)
        }
}
    if(msg.content.startsWith(prefix) && msg.content.endsWith("copypasta")) {
        copypastas();
    }
    const tagurit = new Discord.MessageAttachment()
    .setFile('C:/Users/jaelt/funni/tag.jpg')

    if(msg.content.startsWith(prefix) && msg.content.endsWith('tag')) {
        msg.channel.send(tagurit);
    }
    function embedcolor(color) {
        color = Math.round(Math.random()*4)
        let thing = ""
    if(color == 0) {
        thing = "#5dbb97"
    } else if(color == 1) {
        thing = "#33d885"
    } else if (color == 2) {
        thing = "#e9b100"
    } else if (color == 3) {
        thing = "#e85cde"
    }
    const infoEmbed = new Discord.MessageEmbed()
    .setTitle('Info')
    .setColor(thing)
    .addFields (
        {name:"Created on:", value:"1st March, 2021"},
        {name:"Created by:", value:"<@398758748904226836>"},
        {name:"Help/Ideas:", value:"<@638120368816521236>, <@471555652234510336>, <@395955206350831616>, <@419320824584077324>, <@743679520107790416>, <@673652324258021387>, <@417047189311848448> "},
        {name:"Coding help:", value:"<@743679520107790416>"}
    )
    .setFooter("super cool people")
    msg.channel.send(infoEmbed)
    }
    if(msg.content.startsWith(prefix) && msg.content.endsWith("B)")) {
        embedcolor();
    }
});
client.login(botToken)