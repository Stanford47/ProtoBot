'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const botToken = ("ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc")
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
        {name:"**sweeping** (not working yet)", value:owo.translate("you'll find out when you try it...")},
        {name:"**random text**(not working yet)", value:owo.translate("it gives you random text!")},
        {name:"**changelog**", value:owo.translate("shows the most recent changes to me")},
        {name:"**owoify**", value:owo.translate("i get to have fun and make your text funky OwO")},
        {name:"**rng**", value:owo.translate("i will give you a random number!")},
        {name:"**invite**", value:owo("i give you my invite link so that you can put me in your server")},
        {name:"||**horknee**||", value:"||**do p!horknee-help for the availiable commands for this**||"}
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
    .setTitle("ProtoBot V4")
    .setDescription("Most recent changes")
    .addFields (
        {name:"**New Commands!**", value:"added another secret command ask <@398758748904226836> about it"},
        {name:"**Changes!**", value:"added new command to the help command"}
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
    msg.channel.send("https://discord.com/oauth2/authorize?client_id=816003326990221373&scope=bot")
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
});
client.login(botToken)