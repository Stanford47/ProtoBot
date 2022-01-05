const Command = require('../classes/Command');
const Discord = require('discord.js');
const Dictionary = require('oxford-dictionary');
const { oxford } = require('../../../secrets/config.json');


module.exports = new Command({
    name: "dictionary",
    description: "",

    async run(message, args, client) {
        if(args[1] === undefined) return message.reply(`I need a word to find the ${wtd} of`);

        const word = args[1];
        const lang = args[2] || "en-us"; //add region default later

        const dict = new Dictionary({ app_id: oxford.app_id, app_key: oxford.app_key, language: lang });

        var def = await dict.definitions(word).then(data => {
            return data.results[0].lexicalEntries[0].entries[0].senses[0].definitions.join(/\n/g);
        });

        
         message.reply({
             embeds: [new Discord.MessageEmbed()
                 .setColor('0x8c9cb8')
                 .setTitle(`Definition for ${word}`)
                 .addFields(
                     {name: "definition", value: def}
                 )
                 .setFooter({ text: "Definitions sourced from The Oxford Dictionary." })
             ]
         })
    }
});