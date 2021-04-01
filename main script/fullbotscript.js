const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require("../devtools/json/config.json")
client.on('ready', () => {
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
        msg.channel.send(owo.translate("hello yes i am here, i work"))
    }
    const coolembed = new Discord.MessageEmbed()
    .setTitle(owo.translate("All of my commands in one place"))
    .setDescription(owo.translate("**my prefix is:**" + "__**p!**__"))
    .addFields(
        {name:"**test**", value:owo.translate("use this to test if i am alive")},
        {name:"**help**", value:owo.translate("the command you are using right now. this will give you a list of all of my commands!")},
        {name:"**changelog**", value:owo.translate("shows the most recent changes to me")},
        {name:"**invite**", value:owo.translate("i give you my invite link so that you can put me in your server")},
        {name:"**misc**", value:owo.translate("just other random commands that I was programmed to do. remember if you have any questions, ask <@398758748904226836>!") }
    )
    .setFooter(owo.translate("hello there friend!"))
    .setTimestamp()
    if(msg.content.startsWith(prefix+"help")) {
        msg.channel.send(coolembed)
    }
  const changedEmbed = new Discord.MessageEmbed()
    .setTitle("ProtoBot V12")
    .setDescription("the biggest update (coding wise)")
    .addFields (
        {name:"**New Commands!**", value:"no new commands"},
        {name:"**Changes!**", value:"a lot of changes have happened in the code, also something has been done to a command for april fools 8)"}
    )
    .setFooter("OwO")
    .setTimestamp()
    if(msg.content.startsWith(prefix+"changelog")) {
        msg.channel.send(changedEmbed);
    }
if(msg.content.startsWith(prefix+"invite")) {
    msg.channel.send(owo.translate("here\'s the link so you can invite me to your server"))
    msg.channel.send("https://discord.com/api/oauth2/authorize?client_id=816003326990221373&permissions=2151152704&scope=bot")
}
function RNGfunct() {
    let rng = Math.floor(Math.random() *100000000001);
     msg.channel.send(owo.translate("here is your random number :) " + rng))
    }
    if(msg.content.startsWith(prefix+'rng')) {
          RNGfunct();
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
    let dietextrng = Math.floor((Math.random()*1000)+1)
    let dietextrng2 = Math.floor((Math.random()*5) +1)
    if(dietextrng < 1000) {
    if(dietextrng2 === 6) {
        msg.channel.send(":(")
    }else if(dietextrng === 5) {
        msg.channel.send("\\*sad protogen noises\\*")
    } else if(dietextrng === 4) {
        msg.channel.send(owo.translate("thats not nice :("))
    } else if(dietextrng === 3) {
        msg.channel.send(owo.translate("no I won\'t"))
    } else if(dietextrng === 2) {
        msg.channel.send(owo.translate("no u"))
    } else if(dietextrng === 1) {
        msg.channel.send(owo.translate("bad!"))
    }
} else if(dietextrng === 1000) {
    const rngmessageembed = new Discord.MessageEmbed()
    .setTitle("** **")
    .setDescription("** **")
    .addFields(
        {name:"** **", value:"DiscordAPIError: Cannot send an empty message"},
        {name:"** **", value:"at RequestHandler.execute (C:/Users/user1/ProtoBot/node_modules/discord.js/src/rest/RequestHandler.js:154:18"},
        {name:"** **", value:"at processTicksAndRejections (node:internal/process/task_queues:94:5)"},
        {name:"** **", value:"at async RequestHandler.push (C:/Users/user1/ProtoBot/node_modules/discord.js/src/rest/RequestHandler.js:39:14)"}
    )
    .setTimestamp()
    .setFooter("** **")
    msg.channel.send(owo.translate("no im not goi-"));
    msg.channel.send(rngmessageembed);
    msg.channel.send("")
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
    {name:"uwu", value:owo.translate(":3")},
    {name:"h or j", value:owo.translate("letters")}
)
.setTimestamp()
.setFooter("h is best letter!")
    if(msg.content.startsWith(prefix+"secret")) {
        msg.channel.send(secretEmbed)
    }
    function uwuowo() {
        let uwurng = Math.floor((Math.random() *2)+1)
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
    function jrng() {
        let Jrng = Math.floor(Math.random() *2)
        if(Jrng === 1) {
            msg.channel.send("racc says, \"J is objectively the best letter\"")
        } else if(Jrng === 0) {  
            msg.channel.send(owo.translate("J is not as good as h :)"));
        }
        }
    if(msg.content.startsWith(prefix+"j") || msg.content.startsWith(prefix+"J")) {
        jrng();
    }
    if(msg.content.startsWith(prefix+"h") && msg.content.length === 3 || msg.content.startsWith(prefix+"H")) {
        msg.channel.send(owo.translate("h is pretty cool if you ask me :D"));
    }
    //lol
    if(!msg.content.includes(prefix+"owoify")) {
        return
    }else if(msg.content.length < 9 && msg.content.startsWith(prefix+"owoify")) {
        msg.channel.send(owo.translate("give me something to owoify"))
    }else if(msg.content.startsWith("p!owoify" && msg.content)) {
    let owoification = msg.content
    msg.channel.send(owo.translate(owoification.replace(prefix+"owoify", "** **")))
    //always keep this on bottom
}
});
client.login(botToken)
//list of cool people on discord: It'sTheVeam#4823, Itsamedood#5000, tweet#7777, racc#7507, Blanket Boi#6921
//btw the cool people are people that helped in some way
//yes i know i can use the multi-line comments
//made by Stanford47#6558
//rename bot to gorilla smile on 1/4/2021
/*
  --------------------------------
  |==============================|
  |=  ++++++   +   +   +++++++  =|
  |=  +        +   +         +  =|
  |=  ++++++   ++++++      ++++ =|
  |=       +       +         +  =|
  |=  ++++++       +         +  =|
  |==============================|
  --------------------------------
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
/* list of stuff to do later:
-nothing at the moment...
*/
//maybe add devtools to this later...