const Command = require('../classes/Command.js');

module.exports = new Command({
    name: "tts",
    description: "i say something in text to speach",

    async run(message, args, client) {
        if(!message.guild.me.permissions.has('SEND_TTS_MESSAGES')) return message.channel.send("I am not allowed to use TTS :<");

        try {
            message.channel.send({
                content: args.slice(1).join(" "),
                tts: true
            });
        } catch (err) {
            return message.channel.send("there was an error :/");
        }
    }
}); 