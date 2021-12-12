const Command = require('../classes/Command.js');

module.exports = new Command({
    name: "say",
    description: "I say anything you want..**Anything**",

    async run(message, args, client) {
        try {
            message.delete();
        } catch(err) {
            console.log("");
        }

        message.channel.send(args.slice(1).join(" "));
    }
});