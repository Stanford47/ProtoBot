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
.setTitle("Horknee Help")
.setDescription("...")
.addFields (
    {name:"**copypasta**", value:owo.translate("I will say a cool copypasta owo")},
    {name:"||**yoff**||", value:owo.translate("||lets be honest, its kinda obvious what this does||")}
)
.setFooter("òwó")
.setTimestamp()
if(msg.content.startsWith(prefix) && msg.content.endsWith("hornknee")) {
    msg.channel.send(horkneeHelp)
}
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
if(msg.content.startsWith(prefix) && msg.content.endsWith("copypasta")) {
    msg.channel.send(owo.translate("OwO looks like someone is horny"));
    msg.channel.send(owo.translate(copypasta1));
}
});
client.login(botToken)