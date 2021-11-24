const { Client, MessageEmbed } = require('discord.js');
const setup = require('../secrets/config.json');
const sleep = require('../secrets/sleep');
const botIntents = require('../secrets/discordIntents');
const chalk = require('chalk');
const fs = require('fs');
const { joinVoiceChannel } = require('@discordjs/voice');

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
        if(!msg.member.voice.channel) return msg.channel.send("you must be in a voice channel :/");

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
        const sid = msg.guild.me.voice.sessionId;

        msg.guild.me.voice.disconnect();
    } //if not in channel add text later

    //play function (void)
    function play_audio() {
        if(!msg.guild.me.voice) 
        {
            joinVoiceChannel({
                channelId: msg.member.voice.channel.id,
                guildId: msg.guild.id,
                adapterCreator: msg.guild.voiceAdapterCreator
            });
        }

        
    }

    if(msg.content === prefix + "join")
    {
        join_vc();
    }

    if(msg.content === prefix + "leave")
    {
        leave_vc();
    }
});
client.login(botToken);