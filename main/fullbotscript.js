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
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#438d80')
    .setTitle("Help")
    .setDescription(owo.translate("remember that my prefix is " + prefix))
    .addFields(
        {name:"help", value:owo.translate("this is the command that you are using right now. shows a general description of most of the commands"), inline:true},
        {name:"changelog", value:owo.translate("this shows the most recent changes to me"), inline:true},
        {name:"invite", value:owo.translate("gives you a link to invite me to your server"), inline:true},
        {name:"fun", value:owo.translate("this shows some fun and cool commands"), inline:true},
        {name:"||nsfw||", value:owo.translate("||you should know what this is...||"), inline:true}
    )
    .setFooter(":3")
    .setTimestamp()
    if(msg.content.startsWith(prefix) && msg.content.endsWith("help")) {
        msg.channel.send(helpEmbed);
    }
    const changedEmbed = new Discord.MessageEmbed()
    .setColor("#34eb67")
    .setTitle("V13.2.1")
    .setDescription("most recent changes")
    .addFields(
        {name:"bugfixes", value:"no new bugs found :D"},
        {name:"new commands", value:"nothing new this time..."},
        {name:"other additions", value:"remade nsfw command ;)"}
    )
    .setFooter("more info can be found in the GitHub repo :3")
    .setTimestamp()
    if(msg.content.startsWith(prefix) && msg.content.endsWith("changelog")) {
        msg.channel.send(changedEmbed)
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
if(msg.content.startsWith(prefix) && msg.content.endsWith("misc-help") || msg.content.endsWith("misc") || msg.content.endsWith("fun")) {
    msg.channel.send(mischelpEmbed)
}
function die() {
    let dietextrng = Math.floor((Math.random()*5) +1)
    if(dietextrng === 6) {
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
    if (msg.content.startsWith(prefix) && msg.content.endsWith("owo") || msg.content.endsWith("uwu") && msg.content.length === 5) {
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
    function what(msg1, msg2, msg3, msg4, msgrng) {
        msg1 = owo.translate("hello")
        msg2 = owo.translate("huh?")
        msg3 = owo.translate("you need me?")
        msg4 = owo.translate("?")
        msgrng = Math.round((Math.random() *3) +1)
        switch (msgrng) {
            case 4:
                msg.channel.send(msg1)
                break;
            case 3:
                msg.channel.send(msg2)
                break;
            case 2:
                msg.channel.send(msg3)
                break;
            case 1:
                msg.channel.send(msg4)
                break;
        }
    }
    if(msg.content.startsWith(prefix) && msg.content.length === 2) {
        what();
    }
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
//list of cool people on discord: It'sTheVeam#4823, Itsamedood#5000, tweet#7777, racc#7507, Where am I?#3529, cfop#2697, Vahzen#9637
//btw the cool people are people that helped in some way
//yes i know i can use the multi-line comments
//made by Stanford47#5621
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