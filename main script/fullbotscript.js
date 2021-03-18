'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require("./config.json")
client.on('ready', () => {
    client.user.setActivity("for more ram", {
        type:"WATCHING",
    });
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    if(msg.content.startsWith(prefix+"test")) {
        msg.channel.send(owo("hello yes i am here, i work"))
    }
    const coolembed = new Discord.MessageEmbed()
    .setTitle(owo.translate("All of my commands in one place"))
    .setDescription(owo.translate("**remember my prefix is:**" + "__** p!**__"))
    .addFields(
        {name:"**test**", value:owo.translate("use this to test if i am alive")},
        {name:"**help**", value:owo.translate("the command you are using right now. this will give you a list of all of my commands!")},
        {name:"**changelog**", value:owo.translate("shows the most recent changes to me")},
        {name:"**invite**", value:owo.translate("i give you my invite link so that you can put me in your server")},
        {name:"||**horknee**||", value:"||**do p!horknee help for the availiable commands for this**||"},
        {name:"**misc**", value:owo.translate("just other random commands that I was programmed to do. remember if you have any questions, ask <@398758748904226836>!") }
    )
    .setFooter(owo.translate("hello there friend!"))
    .setTimestamp()
    if(msg.content.startsWith(prefix+"help")) {
    msg.channel.send(owo.translate("help? You want help about me? Ok! here you go!"))
        msg.channel.send(coolembed)
    }
    if(!msg.content.includes(prefix+"owoify")) {
        return
    }else if(msg.content.length < 9 && msg.content.startsWith(prefix+"owoify")) {
        msg.channel.send(owo.translate("give me something to owoify"))
    }else if(msg.content.startsWith("p!owoify" && msg.content)) {
    let owoification = msg.content
    msg.channel.send(owo.translate(owoification.replace(prefix+"owoify", "** **")))
    
}
    const changedEmbed = new Discord.MessageEmbed()
    .setTitle("ProtoBot V10.2")
    .setDescription("Most recent changes")
    .addFields (
        {name:"**New Commands!**", value:"nothing..."},
        {name:"**Changes!**", value:"fixed a bug that would owoify any text that is connected to p!"}
    )
    .setFooter("OwO")
    .setTimestamp()
    if(msg.content.startsWith(prefix+"changelog")) {
        msg.channel.send(changedEmbed);
    }
    const horkneeHelp = new Discord.MessageEmbed()
.setTitle("Horknee Help")
.setDescription("why would you want these...?")
.addFields (
    {name:"**copypasta**", value:owo.translate("I will say a cool copypasta owo")},
    {name:"||**yoff**||", value:owo.translate("||lets be honest, its kinda obvious what this does||")}
)
.setFooter("òwó")
.setTimestamp()
if(msg.content.startsWith(prefix+"horknee help")) {
    msg.channel.send(owo.translate("ok then..."))
    msg.channel.send(horkneeHelp)
}
if(msg.content.startsWith(prefix+"invite")) {
    msg.channel.send(owo.translate("here\'s the link so you can invite me to your server!"))
    msg.channel.send("https://discord.com/api/oauth2/authorize?client_id=816003326990221373&permissions=2151152704&scope=bot")
}
if(msg.content.startsWith(prefix+"copypasta")) {
    msg.channel.send(owo.translate("OwO looks like someone is horny"));
    msg.channel.send(owo.translate("Rawr x3 nuzzles how are you pounces on you you're so warm o3o notices you have a bulge o: someone's happy ;) nuzzles your necky wecky~ murr~ hehehe rubbies your bulgy wolgy you're so big :oooo rubbies more on your bulgy wolgy it doesn't stop growing ·///· kisses you and lickies your necky daddy likies (; nuzzles wuzzles I hope daddy really likes $: wiggles butt and squirms I want to see your big daddy meat~ wiggles butt I have a little itch o3o wags tail can you please get my itch~ puts paws on your chest nyea~ its a seven inch itch rubs your chest can you help me pwease squirms pwetty pwease sad face I need to be punished runs paws down your chest and bites lip like I need to be punished really good~ paws on your bulge as I lick my lips I'm getting thirsty. I can go for some milk unbuttons your pants as my eyes glow you smell so musky :v licks shaft mmmm~"));
}
function RNGfunct() {
    let rng = Math.floor(Math.random() *100000000001);
     msg.channel.send(owo.translate("here is your random number :) " + rng))
    }
    if(msg.content.startsWith(prefix+'rng')) {
          RNGfunct();
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
    if(msg.content.startsWith(prefix+"yoff")) {
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
if(msg.content.startsWith(prefix+"fdetect")) {
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
if(msg.content.startsWith(prefix+"misc-help")) {
    msg.channel.send(mischelpEmbed)
}
function die() {
    let dietextrng = Math.floor((Math.random()*5) +1)
    if(dietextrng === 4) {
        msg.channel.send(owo.translate("thats not nice :("))
    } else if(dietextrng === 3) {
        msg.channel.send(owo.translate("no I won\'t"))
    } else if(dietextrng === 2) {
        msg.channel.send(owo.translate("no u"))
    } else if(dietextrng === 1) {
        msg.channel.send(owo.translate("bad!"))
    }
}
if(msg.content.startsWith(prefix+"die")) {
    die();
}
const secretEmbed = new Discord.MessageEmbed()
.setTitle("**Secret Commands**")
.setDescription("this is a secret dont tell anyone!!")
.addFields(
    {name:"die", value:owo.translate("please don\'t do this :(")},
    {name:"uwu", value:owo.translate(":)")}
)
.setTimestamp()
.setFooter("h is best letter!")
    if(msg.content.startsWith(prefix+"secret")) {
        msg.channel.send(secretEmbed)
    }
    function uwuowo() {
        let uwurng = Math.floor((Math.random() *3)+1)
        if(uwurng === 1) {
            msg.channel.send("uwu")
        } else if(uwurng === 2) {
            msg.channel.send("owo")
        } else if(uwurng === 3) {
            msg.channel.send(":3")
        }
    }
    if(msg.content.startsWith(prefix+"owo") && msg.content.length === 5) {
        uwuowo();
    }
    if(msg.content.startsWith(prefix+"uwu") && msg.content.length === 5) {
        uwuowo();
    }
});
client.login(botToken)
//list of cool people on discord: It'sTheVeam#4823, Itsamedood#5000, tweet#7777, racc#7507
//btw the cool people are people that helped in some way,shape, or form
//yes i know i can use the multi-line comments
//made by Stanford47#6558
/*
  |==============================|
  |=  ++++++   +   +   +++++++  =|
  |=  +        +   +         +  =|
  |=  ++++++   ++++++      ++++ =|
  |=       +       +         +  =|
  |=  ++++++       +         +  =|
  |==============================|
  
  OOOOOO       OOOOOO
  OOOOOO        OOOOO
  OOOOOO         OOOO
                  OOO
                   OO
                  OOO
  OOOOOO         OOOO
  OOOOOO        OOOOO
  OOOOOO       OOOOOO
*/