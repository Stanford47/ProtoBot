const { Client, MessageEmbed } = require('discord.js');
const setup = require('../secrets/config.json');
const sleep = require('../secrets/sleep');
const botIntents = require('../secrets/discordIntents');
const chalk = require('chalk');
const fs = require('fs');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayer, VoiceConnection } = require('@discordjs/voice');
const https = require('https');
const fastFolderSize = require('fast-folder-size');
const { promisify } = require('util');
const fastFolderSizeAsync = promisify(fastFolderSize)

/* Client Setup */
const client = new Client({ intents: botIntents });

/* On File Open */
console.log(chalk.blueBright("ProtoBot Voice"));

/* On Client Ready */
client.on('ready', () => {
    console.log(chalk.greenBright("ready!"));
});

/* Redeclare Vars */
const prefix = setup.setup.prefix;
const botToken = setup.setup.botToken;

/* On New Message */
client.on('messageCreate', async msg => {
    //dont care if it doesnt start with prefix
    if(!msg.content.startsWith(setup.setup.prefix)) return;

    //join function (void)
    function join_vc() {
        if(!msg.member.voice.channel.permissionsFor(msg.guild.me).has('CONNECT')) return msg.channel.send("i can\'t join your voice channel :(\ncheck if you gave me permission to join!");

        if(msg.member.voice.channel.full) return msg.channel.send("your voice channel is full! i can\'t join :<");

        joinVoiceChannel({
            channelId: msg.member.voice.channel.id,
            guildId: msg.guild.id,
            adapterCreator: msg.guild.voiceAdapterCreator
        });
    }

    //leave function (void)
    function leave_vc() {
        msg.guild.me.voice.setMute(true);

        msg.guild.me.voice.disconnect();
    } //if not in channel add text later

    //play function (void)
    function play_audio() {
        //get args
        const theAux = msg.content.split(" ").slice(1);
        var freemusic = "";
        var path = "";
        var subscribeToMyYoutubeChannelForChanceAtWinningMyFreeGiftCardGiveaway = createAudioPlayer();
        
        //check if audio is global or local
        if(theAux[0] == "amogus" || theAux[0] == "real" || theAux[0] == "THITEAT" || theAux == "wow" || theAux == "polyriddim" || theAux === "ohno") {
            freemusic = theAux[0];

            path = `../assets/${freemusic}.mp3`;
        } else {
            //make vars for checks
            var theManWithPepsi = fs.existsSync(`../secrets/guilds/${msg.guild.id}/audio/${theAux[0]}.mp3`); //checks if it exists

            //check if audio exists
            if(theManWithPepsi == false) {
                return msg.reply("that doesn\'t exist! try adding a sound with that name.");
            } else {
                freemusic = theAux[0];

                path = `../secrets/guilds/${msg.guild.id}/audio/${freemusic}.mp3`;
            }
        }
        //join the vc
        var uwu = joinVoiceChannel({
            channelId: msg.member.voice.channel.id,
            guildId: msg.guild.id,
            adapterCreator: msg.guild.voiceAdapterCreator
        });
        
        //create audio player
        

        //get path to file to play
        var a = createAudioResource(path, { inlineVolume:true })
        a.volume = 50;

        //subscribe the connection
        uwu.subscribe(subscribeToMyYoutubeChannelForChanceAtWinningMyFreeGiftCardGiveaway);

        //play audio
        subscribeToMyYoutubeChannelForChanceAtWinningMyFreeGiftCardGiveaway.play(a);

        msg.guild.me.voice.setMute(false);
    }

    //audio install function(AudioPlayer)
    async function new_audio() {
        //get args
        const instArgs = msg.content.split(" ").slice(1);

        //get attachment url
        const attURL = msg.attachments.first() ? msg.attachments.first().url : null;

        if(instArgs[0].length > 20) return msg.reply("that name is too long!");

        //if no attachment
        if(attURL === null) return msg.reply("you must give me a file to save!");

        //if attachment !end with mp3
        if(!attURL.endsWith(".mp3")) return msg.reply("i can only use mp3 files .w.");

        //if user !argument 
        if(instArgs[0] == "") return msg.reply("you must give me a name for this audio!");

        //check if the guild's audio dir is >= 1.0gb
        var dirSize = await fastFolderSizeAsync(`../secrets/guilds/${msg.guild.id}/audio`);
        if(dirSize >= 1073741824) return msg.reply("your server\'s audio storage is full! try removing a file and try again :)");

        //now install file
        var file = fs.createWriteStream(`../secrets/guilds/${msg.guild.id}/audio/${instArgs[0]}.mp3`);

        const request = https.get(attURL, (response) => {
            response.pipe(file);
        });

        msg.channel.send(`added ${instArgs[0]}!`);
    }

    //list audios function(void)
    async function list_music() {
        const list = fs.readdirSync(`../secrets/guilds/${msg.guild.id}/audio`);
        var str = "";

        list.forEach(file => {
            str = str + `- \`${file.replace(".mp3", "")}\`\n`;
        });

        var dirSize = await fastFolderSizeAsync(`../secrets/guilds/${msg.guild.id}/audio`);

        var dirSizeNew = dirSize/1024/1024;

        str = str + `\nspace used: \`${Math.round(dirSizeNew)} MiB\`      space left: \`${Math.round((1073741824-dirSize)/1024/1024)} MiB\``;

        msg.channel.send(str);
    }

    //remove audios function(void)
    function remove_audio() {
        const delArgs = msg.content.split(" ").slice(1);

        if(delArgs[0] == undefined) return msg.reply("what would you like me to remove");

        fs.unlink(`../secrets/guilds/${msg.guild.id}/audio/${delArgs[0]}.mp3`, (e) => {
            if(e) {
                console.error(e);

                return msg.reply("i could\'t remove that for some reason... try again");
            }
        });

        msg.channel.send("successfully removed " + delArgs[0]);
    }

    if(msg.content === prefix + "join")
    {
        join_vc();
    }

    if(msg.content === prefix + "leave")
    {
        leave_vc();
    }

    if(msg.content.startsWith(prefix + "play") || msg.content === prefix + "stop")
    {
        play_audio();
    }

    if(msg.content.startsWith(prefix + "add"))
    {
        new_audio();
    }

    if(msg.content === prefix + "list")
    {
        list_music();
    }

    if(msg.content.startsWith(prefix + "remove"))
    {
        remove_audio();
    }
});
client.login(botToken);
//thanks death for helping me with this lmao