const Discord = require('discord.js');
const owo = require('@zuzak/owo')
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../../config.json')
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