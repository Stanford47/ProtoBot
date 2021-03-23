//lol why did i make this
const owo = require("@zuzak/owo");
const {
    prefix,
    botToken,
} = require("../main script/config.json");
const Discord = require("discord.js");
const client = new Discord.Client()
client.on('ready', () =>{
    console.log("ready")
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
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
    if(msg.content.startsWith(prefix+"h") || msg.content.startsWith(prefix+"H")) {
        msg.channel.send(owo.translate("h is pretty cool if you ask me :D"));
    }
    //lol
});
client.login(botToken)