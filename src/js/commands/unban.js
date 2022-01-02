const Command = require('../classes/Command');
const fs = require('fs');
const Discord = require('discord.js');

module.exports = new Command({
    name: "unban",
    description: "unbans a banned user from your guild",

    async run(message, args, client) {
        let goodmanID = message.mentions.members.first() ? message.mentions.members.first().id : args[1];

        if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply("i do not have permission to do this");
        if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply("you don\'t have permissions to use this command");
        if(goodmanID === "" || goodmanID === undefined) return message.reply("you must give me a user or user\'s id to unban!");

        message.guild.members.unban(goodmanID).then(user => {
            message.channel.send(`user <@${goodmanID}> has been unbanned`);
        }).catch(() => {
            message.reply("that person hasn\'t been banned in this server. please give me a valid user id");
        });
    }
});