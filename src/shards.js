const Discord = require('discord.js');
const { setup } = require('../secrets/config.json');
const Manager = new Discord.ShardingManager('./src/main.js', {
    token: setup.botToken,
    totalShards: 3
});

Manager.on('shardCreate', shard => console.log(`Spawned new shard: ${shard.id}`));

Manager.spawn();