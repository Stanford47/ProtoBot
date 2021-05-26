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
    function Com(Computer) {
        Computer = Math.round(Math.random()*3)
        
        if(Computer == 0) {
            Computer = Math.round(Math.random()*3)
            if(Computer == 0) {
                Computer = 'rock'
            } else if (Computer == 1) {
                Computer = 'paper'
            } else if (Computer == 2) {
                Computer = 'scissors'
            }
        } else if (Computer == 1) {
            Computer = Math.round((Math.random()*3)-1)
            if(Computer == -1) {
                Computer = Computer + 3
            }
            if(Computer == 0) {
                Computer = 'rock'
            } else if (Computer == 1) {
                Computer = 'paper'
            } else if (Computer == 2) {
                Computer = 'scissors'
            }
        }else if (Computer == 2) {
            Computer = Math.round(Math.random()*3) - Math.round((Math.random()*3)+1)
            if(Computer == -1) {
                Computer = Math.round(Math.random()*3)
            }
            if(Computer == 0) {
                Computer = 'rock'
            } else if (Computer == 1) {
                Computer = 'paper'
            } else if (Computer == 2) {
                Computer = 'scissors'
            }
        }
        let player = msg.content
        player = player.replace("p!rps ", "")
        if(player === 'rock' && Computer === 'rock' || player === 'paper' && Computer === 'paper' || player === 'scissors' && Computer === 'scissors') {
            const TieEmbed = new Discord.MessageEmbed()
            .setColor("#c1d4c4")
            .setTitle("Tie!")
            .addFields(
                {name:"ProtoBot", value:Computer, inline:true},
                {name:"You", value:player, inline:true}
            )
            .setFooter(":|")
            msg.channel.send(TieEmbed)
        } else if (player === 'rock' && Computer === 'scissors' || player === 'paper' && Computer === 'rock' || player === "scissors" && Computer === 'paper') {
            const WinEmbed = new Discord.MessageEmbed()
            .setColor("#25c059")
            .setTitle("You win!")
            .addFields(
                {name:"ProtoBot", value:Computer, inline:true},
                {name:"You", value:player, inline:true}
            )
            .setFooter(":(")
            msg.channel.send(WinEmbed)
        } else if (player === 'rock' && Computer === 'paper' || player === 'paper' && Computer === 'scissors' || player === 'scissors' && Computer === 'rock') {
            const LoseEmbed = new Discord.MessageEmbed()
            .setColor("c95555")
            .setTitle("I win!")
            .addFields(
                {name:"ProtoBot", value: Computer, inline:true},
                {name:"You", value:player, inline:true}
            )
            .setFooter(":)")
            msg.channel.send(LoseEmbed)
        }
    }
if(msg.content.startsWith(`${prefix}rps rock`) || msg.content.startsWith(`${prefix}rps paper`) || msg.content.startsWith(`${prefix}rps scissors`)) {
    Com();
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