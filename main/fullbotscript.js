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
        {name:"fun", value:owo.translate("this shows some fun and cool commands"), inline:true}
    )
    .setFooter(":3")
    .setTimestamp()
    if(msg.content.startsWith(prefix) && msg.content.endsWith("help") && !msg.content.includes("horknee") && !msg.content.includes("misc")) {
        msg.channel.send(helpEmbed);
    }
    const changedEmbed = new Discord.MessageEmbed()
    .setColor("#34eb67")
    .setTitle("V15.0.1")
    .setDescription("most recent changes")
    .addFields(
        {name:"bugfixes", value:"fixed bug that would kill the bot if p!changelog was said (I accidentally left a field blank)"},
        {name:"new commands", value:"Rock Paper Scissors added. do p!rps for help."},
        {name:"other additions", value:"nothing new here..."}
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
    let rng = Math.floor(Math.random() *1000000);
     msg.channel.send(owo.translate("here is your random number :)"))
     msg.channel.send(rng)
    }
    if(msg.content.startsWith(prefix+'rng')) {
          RNGfunct();
    }
const mischelpEmbed = new Discord.MessageEmbed()
.setTitle("**Misc. help**")
.setDescription(owo.translate("Help for other commands"))
.addFields(
    {name:"**owoify**", value:owo.translate("i get to have fun and make your text funky OwO")},
    {name:"**rng**", value:owo.translate("I will give you a random number")},
    {name:"**Rock Paper Scissors**", value:"do p!rps for more info"}
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
if(msg.content.startsWith(prefix) && msg.content.endsWith("die")) {
    die();
}
const secretEmbed = new Discord.MessageEmbed()
.setTitle("**Secret Commands**")
.setDescription("this is a secret dont tell anyone!!")
.addFields(
    {name:"die", value:owo.translate("please don\'t do this :(")},
    {name:"uwu or owo", value:owo.translate(":3")},
    {name:"h or j", value:owo.translate("letters")},
    {name:"tag", value:owo.translate("tag your it!")}
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
    if(msg.content.startsWith(prefix) && msg.content.endsWith("j") || msg.content.startsWith(prefix) && msg.content.endsWith("J")) {
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
    function owoify() {
        if(msg.content.length < 9) {
            msg.reply(owo.translate("I cant owoify nothing! give me something to owoify!"))
        } else {
            let owoification = msg.content
            msg.channel.send(owo.translate(owoification.replace(`${prefix}owoify`, ` `)))
        }
    }
    if(msg.content.startsWith(`${prefix}owoify`)) {
        owoify();
    }
    function pbUptime(uptimeMSG) {
        if(msg.content.startsWith(prefix)) {
    let botUptime = client.uptime
    if(msg.content.endsWith("uptime hours")) {
        uptimeMSG = Math.round(botUptime / 3600000)
        msg.channel.send(`${uptimeMSG} hours`)
    } else if (msg.content.endsWith("uptime days")) {
        uptimeMSG = Math.round(botUptime / 86400000)
        msg.channel.send(`${uptimeMSG} days`)
    } else if (msg.content.endsWith("uptime minutes")) {
        uptimeMSG = Math.round(botUptime / 60000)
        msg.channel.send(`${uptimeMSG} minutes`)
    } else if (msg.content.endsWith("uptime seconds")) {
        uptimeMSG = Math.round(botUptime / 1000) 
        msg.channel.send(`${uptimeMSG} seconds`)
    }
    }
}
if(msg.content.startsWith(prefix) && msg.content.includes("uptime")) {
    pbUptime();
}
});
client.login(botToken)
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
