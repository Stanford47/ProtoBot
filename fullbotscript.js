'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const botToken = 'ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.wdMZSo0q1DYNjnkCszd89qRJ2ng'
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith("p!test")) {
        msg.channel.send(owo("hello yes i am here, i work"))
    }
    const coolembed = new Discord.MessageEmbed()
    .setTitle(owo.translate("All of my commands in one place"))
    .setDescription(owo("**remember my prefix is:**" + "__** p!**__"))
    .addFields(
        {name:"**test**", value:owo.translate("use this to test if i am alive")},
        {name:"**help**", value:owo.translate("the command you are using right now. this will give you a list of all of my commands!")},
        {name:"**changelog**", value:owo.translate("shows the most recent changes to me")},
        {name:"**invite**", value:owo.translate("i give you my invite link so that you can put me in your server")},
        {name:"||**horknee**||", value:"||**do p!horknee-help for the availiable commands for this**||"},
        {name:"**music** (not working)", value:owo.translate("**do p!music-help for the availiable commands for this**")},
        {name:"**misc**", value:owo.translate("just other random commands that I was programmed to do. remember if you have any questions, ask <@398758748904226836>!") }
    )
    .setFooter(owo.translate("hello there friend!"))
    .setAuthor()
    .setTimestamp()
    if(msg.content.startsWith("p!help")) {
    msg.channel.send(owo.translate("help? You want help about me? Ok! here you go!"))
        msg.channel.send(coolembed)
    }
    if(msg.content.startsWith("p!owoify")) {
        let owoification = msg.content
        msg.channel.send(owo.translate(owoification.replace("p!owoify", "")))
    }
    const changedEmbed = new Discord.MessageEmbed()
    .setTitle("ProtoBot V6")
    .setDescription("Most recent changes")
    .addFields (
        {name:"**New Commands!**", value:"added a \"beta\" command that is being tested. Also, I\'ve added a help embed for miscellaneous commands (this is where you can find the new command)"},
        {name:"**Changes!**", value:"moved rng and owoify to misc. help"}
    )
    .setFooter("OwO")
    .setTimestamp()
    if(msg.content.startsWith("p!changelog")) {
        msg.channel.send(changedEmbed);
    }
    const horkneeHelp = new Discord.MessageEmbed()
.setTitle("Horknee Help")
.setDescription("when specifying the command you want, put a **-** between the two words (eg. p!horknee-copypasta)")
.addFields (
    {name:"**copypasta**", value:owo.translate("I will say a cool copypasta owo")},
    {name:"||**yoff**||", value:owo.translate("||lets be honest, its kinda obvious what this does||")}
)
.setFooter("òwó")
.setTimestamp()
if(msg.content.startsWith("p!horknee-help")) {
    msg.channel.send(owo.translate("ok then..."))
    msg.channel.send(horkneeHelp)
}
if(msg.content.startsWith("p!invite")) {
    msg.channel.send(owo.translate("here\'s the link so you can invite me to your server!"))
    msg.channel.send("https://discord.com/api/oauth2/authorize?client_id=816003326990221373&permissions=2151152704&scope=bot")
}
if(msg.content.startsWith("p!horknee-copypasta")) {
    console.log("horny user detected!");
    msg.channel.send(owo.translate("OwO looks like someone is horny"));
    msg.channel.send(owo.translate("Rawr x3 nuzzles how are you pounces on you you're so warm o3o notices you have a bulge o: someone's happy ;) nuzzles your necky wecky~ murr~ hehehe rubbies your bulgy wolgy you're so big :oooo rubbies more on your bulgy wolgy it doesn't stop growing ·///· kisses you and lickies your necky daddy likies (; nuzzles wuzzles I hope daddy really likes $: wiggles butt and squirms I want to see your big daddy meat~ wiggles butt I have a little itch o3o wags tail can you please get my itch~ puts paws on your chest nyea~ its a seven inch itch rubs your chest can you help me pwease squirms pwetty pwease sad face I need to be punished runs paws down your chest and bites lip like I need to be punished really good~ paws on your bulge as I lick my lips I'm getting thirsty. I can go for some milk unbuttons your pants as my eyes glow you smell so musky :v licks shaft mmmm~"));
}
function RNGfunct() {
    let rng = Math.floor(Math.random() *100000000001);
     msg.channel.send(owo.translate("here is your random number :) " + rng))
    }
    if(msg.content.startsWith('p!rng')) {
          RNGfunct();
    }
    function inquiryYG() {
        let iyg = Math.floor(Math.random() *2623476) +12426
        let post = 'https://e621.net/posts/' + iyg + '?q=set%3Abestfavorites'
        if(!msg.channel.nsfw) {
            msg.channel.send(owo.translate("I cannot send nsfw posts in a non-nsfw channel..."))
        } else {
            msg.channel.send(owo.translate("OwO looks like someone is very horny"))
            msg.channel.send(post)
        }
        
    }
if(msg.content.startsWith("p!horknee-yoff")) {
    inquiryYG();
}
function fdRNG() {
    let rngF = Math.floor(Math.random() *101);
     let userm = msg.mentions.users
      const fdembed = new Discord.MessageEmbed()
.setDescription(owo.translate("**furry detector**"))
.addFields (
    {name:owo.translate("**calculated furry %**"), value:owo.translate(userm + "is " + rngF + "% furry")}
)
.setTimestamp()
     if(!msg.mentions.users) {
         msg.channel.send(owo.translate("You need to mention a user when trying this command"))
     } else {
        msg.channel.send(fdembed)
     }
}
if(msg.content.startsWith("p!fdetect")) {
    fdRNG();
}
const mischelpEmbed = new Discord.MessageEmbed()
.setTitle("**Misc. help**")
.setDescription(owo.translate("Help for other commands"))
.addFields(
    {name:"**fdetect** (working but not finished)", value:owo.translate("Calculates the amount a person is a furry")},
    {name:"**owoify**", value:owo.translate("i get to have fun and make your text funky OwO")},
    {name:"**rng**", value:owo.translate("I will give you a random number")}
)
.setFooter("UwU")
.setTimestamp()
if(msg.content.startsWith("p!misc-help")) {
    msg.channel.send(mischelpEmbed)
}
});
client.login(botToken)