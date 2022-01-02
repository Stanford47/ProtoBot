const Discord = require('discord.js');
const Command = require('./Command.js');
const Event = require('./Event.js');
const { setup } = require('../../../secrets/config.json');
const fs = require('fs');

const intents = new Discord.Intents(1003);

class Client extends Discord.Client {
    constructor(options) {
        super({ intents, allowedMentions: { repliedUser: false } });

        /**
         * @type { Discord.Collection<string, Command> }
         */
        this.commands = new Discord.Collection();
        this.prefix = setup.prefix;
        this.token = setup.botToken;
    }

    start(token) {
        fs.readdirSync(__dirname.replace("\\classes", "\\commands")).filter(file => file.endsWith('.js')).forEach(file => {
            /**
             * @type {Command}
             */
            const command = require(`../commands/${file}`);
            console.log(`Command: ${file} has been loaded`);
            this.commands.set(command.name, command);
        });

        fs.readdirSync(__dirname.replace("\\classes", "\\events")).filter(file => file.endsWith(".js")).forEach(file => {
            /**
             * @type {Event}
             */
            const event = require(`../events/${file}`);
            console.log(`Event: ${event.event} loaded`);
            this.on(event.event, event.run.bind(null, this));
        });
        
        this.login(token);
    }
}

module.exports = Client;