const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
client.on('ready', () => {
console.log("you wanna go m9");
});
client.on('message', async msg => {
//here we go, going from heros to villans
if(msg.author.bot) {
    return
}
function ComCalc(Computer) {
    Computer = Math.round(Math.random()*3)
    if (msg.content.includes("rock")) {
        if(Computer == 0) {
            Computer = "rock"
            msg.channel.send("Tie! \n" + Computer + " (ProtoBot)" + " = " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        } else if (Computer == 1) {
            Computer = "paper"
            msg.channel.send("I win! \n" + Computer + " (ProtoBot)" + " > " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        } else if (Computer == 2) {
            Computer = "scissors"
            msg.channel.send("You win! \n" + Computer + " (ProtoBot)" + " < " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        }
    } else if (msg.content.includes("paper")) {
        if(Computer == 0) {
            Computer = "rock"
            msg.channel.send("You win! \n" + Computer + " (ProtoBot)" + " < " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        } else if (Computer == 1) {
            Computer = "paper"
            msg.channel.send("Tie! \n" + Computer + " (ProtoBot)" + " = " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        } else if (Computer == 2) {
            Computer = "scissors"
            msg.channel.send("I win! \n" + Computer + " (ProtoBot)" + " > " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        }
    } else if (msg.content.includes("scissors")) {
        if(Computer == 0) {
            Computer = "rock"
            msg.channel.send("I win! \n" + Computer + " (ProtoBot)" + " > " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        } else if (Computer == 1) {
            Computer = "paper"
            msg.channel.send("You win! \n" + Computer + " (ProtoBot)" + " < " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        } else if (Computer == 2) {
            Computer = "scissors"
            msg.channel.send("Tie! \n" + Computer + " (ProtoBot)" + " = " + msg.content.replace(`${prefix}rps`, "") + ` (${msg.author})`)
        }
    }
}
if(msg.content.startsWith(`${prefix}rps rock`) || msg.content.startsWith(`${prefix}rps paper`) || msg.content.startsWith(`${prefix}rps scissors`)) {
 ComCalc();
} else if (msg.content === `${prefix}rps`) {
    const RPShelp = new Discord.MessageEmbed()
    .setTitle("Rock Paper Scissors Help")
    .addFields(
        {name:"how to use the command", value:"do p!rps [rock, paper, or scissors]", inline:true}
    )
    .setFooter(owo.translate("I will always win ;)"))
    msg.channel.send(RPShelp)
} else if (msg.content.startsWith(`${prefix}rps`) && !msg.content.includes("rock" || "paper" || "scissors")) {
    msg.reply(owo.translate("thats not a valid argument!"))
}
});
client.login(botToken)