const { Intents, Client } = require('discord.js');
const { setup } = require('../../secrets/config.json');
const botIntents = require('../../secrets/discordIntents');
const client = new Client({ intents: botIntents });

client.on('ready', () => {
    client.user.setActivity("Learning how to speak || commands not worky right now");
});
client.login(setup.botToken);