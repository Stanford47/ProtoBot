const Client = require('./js/classes/Client.js');
const Command = require('./js/classes/Command.js');
const { setup } = require('../secrets/config.json');
const fs = require('fs');
const Discord = require('discord.js');

const client = new Client();

//err handling
process.on('uncaughtException', (err, origin) => {
    new Discord.WebhookClient({ 
        url: "https://canary.discord.com/api/webhooks/919899414531833888/xmPv3-a2vMOse6h0_VKFbldiXQuU295A-pRA7DkpWLIJmtii5dkyV-o0_QFGoWACH2dl"
     }).send({
         embeds: [new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Uncaught Exeption")
            .setDescription(`${err.name}\n${err.message}\n\n${err.stack}`)
        ]
     });
});

process.on('unhandledRejection', (reason, promise) => {
    console.log(promise);

    new Discord.WebhookClient({
        url: "https://canary.discord.com/api/webhooks/919899414531833888/xmPv3-a2vMOse6h0_VKFbldiXQuU295A-pRA7DkpWLIJmtii5dkyV-o0_QFGoWACH2dl"
    }).send({
        embeds: [new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Unhandled Rejection")
            .setDescription(`${reason}\n${promise}`)
        ]
    });
});

client.start(setup.botToken);