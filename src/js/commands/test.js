const Command = require('../classes/Command.js');

module.exports = new Command({
    name: "test", 
    description: "testing command",

    async run(message, args, client) {
        message.channel.send("test");
    }
});