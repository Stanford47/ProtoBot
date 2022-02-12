const Command = require('../classes/Command');
const Discord = require('discord.js');
const fs = require('fs');
const codeRunner = require('jdoodlecoderunner');
const { jdoodle } = require('../../../secrets/config.json');

module.exports = new Command({
    name: "code",
    description: "base command for programming related commands",

    async run(message, args, client) {

        return message.reply("not woring rn will be fixed soon :>");
        
        //delcaring vars for options
        const sub = args[1] || null
        let language = args[2]?.toLowerCase() || null;
        let opt = args.slice(3)?.join(" ") || null;

        //handling user mistakes
        if (sub === null) return message.reply("you must give me the name of an operation to execute!"); //simplify this lol
        if (language === null) return message.reply("i need a language to get!"); //idk about this one
        if (opt === null) return message.reply("i need a program to find!"); //sure

        //what sub
        if (sub === "example" || sub === "ex") {
            //language aliases
            if (language === "cs" || language === "c#") language = "csharp";
            else if (language === "js") language = "javascript";
            else if (language === "c++") language = "cpp";
            else if (language === "py") language = "python";

            //suffixes
            if (language === "c") suff = ".c";
            else if (language === "cpp") suff = ".cpp";
            else if (language === "csharp") suff = ".cs";
            else if (language === "java") suff = ".java";
            else if (language === "javascript") suff = ".js";
            else if (language === "python") suff = ".py";
            else if (language === "rust") suff = ".rs";

            //program aliases
            if (opt === "hw" || opt === "hello world") opt = "helloworld";
            else if (opt === "fb" || opt === "fizz buzz") opt = "fizzbuzz";

            //checking if file exists
            if (!fs.existsSync(`./assets/uwus/${language}`)) return message.reply("that language is not supported yet! try a different one");
            else if (!fs.existsSync(`./assets/uwus/${language}/${opt}${suff}`)) return message.reply("that program has not been added yet!");

            var att = new Discord.MessageAttachment(`./assets/uwus/${language}/${opt}${suff}`)

            //fix the things back
            if (opt === "helloworld") opt = "Hello World";
            else if (opt === "fizzbuzz") opt = "FizzBuzz";

            if (language === "c") language = "C";
            else if (language === "cpp") language = "C++";
            else if (language === "csharp") language = "C#";
            else if (language === "java") language = "Java";
            else if (language === "javascript") language = "JavaScript";
            else if (language === "python") language = "Python";
            else if (language === "rust") language = "Rust";

            //send da file
            message.channel.send({
                content: `${opt} program for ${language}`,
                files: [att]
            });
        } else if (sub === "run") { 
            console.log(`${JSON.stringify(codeRunner.runCode(`./secrets/temp/${message.guild.id}${language}.toaster`, 'nodejs', 0, null, jdoodle.client_id, jdoodle.client_secret))}`);
        } else {
            return message.reply("that operation does not exist!");
        }
    }
});