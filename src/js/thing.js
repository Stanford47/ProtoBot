//yoo new protobot :D

//Dependencies
const { setup, urls, devcommands } = require('../secrets/config.json');
const chalk = require('chalk');
const { Intents, MessageEmbed, Client, DiscordAPIError } = require('discord.js');
const replaceString = import('replace-string'); //fuck replaceString
const owo = require('@zuzak/owo')
const sleep = require('../secrets/sleep');
const fs = require('fs');
const { exec } = require('child_process');

//on file start
chalk.bgBlackBright();
console.log(chalk.blueBright("Protobot"))

//get intents
const botIntents = require('../secrets/discordIntents');
const { ChildProcess } = require('child_process');

//create client
const client = new Client({ intents: botIntents });

//redefine the config vars
const botToken = setup.botToken;
const prefix = setup.prefix;
const inviteLink = urls.inviteLink;
const repo = urls.repo;

//on ready
client.on('ready', () => {
	//say ready
	console.log(chalk.greenBright("ready!"))

	//start status
	client.user.setActivity({
		name: "for DDR5 RAM",
		type: 'WATCHING'
	});
});

//MAIN
client.on('messageCreate', async msg => {
//==============================
//============ MAIN ============
//==============================

//ok so let me just make it ignore itself because i dont want that to happen again...
if(msg.author.bot) return;

if (!msg.guild.me.permissions.has('SEND_MESSAGES')) return;

//create embeds
function helpEmbeds() {
	if(msg.content === `${prefix}help`)
	{
		const helpEmbed = new MessageEmbed()
		.setColor('DARK_AQUA')
		.setTitle("Help!")
		.setDescription(`remember my prefix is __${prefix}__`)
		.addFields(
		{name: "Fun", value: "fun and cool commands that I was programmed with!", inline: true},
		{name: "Moderation", value: "commands for keeping your server in check", inline: true}, //change the value text, I dont like it
		{name: "Utility", value: "some other commands that are kind of fun", inline: true} //change this one lol
		)
		.setFooter(":3")
		.setTimestamp()

		msg.channel.send({ embeds: [helpEmbed] });
	} else if(msg.content === `${prefix}help fun` || msg.content === `${prefix}fun` || msg.content === `${prefix}other` || msg.content === `${prefix}misc`)
	{
		const miscHelpEmbed = new MessageEmbed()
		.setColor('DARK_GOLD')
		.setTitle("Fun!")
		.setDescription("some fun things that i can do")
		.addFields(
			{name: "owoify", value: "this makes your text look better"}, //cringe af but i only have 30 mins to code the rest of this script!!!
			{name: "say", value: "I say anything you want. **anything**..."},
			{name: "rng", value: "random"} //add feature to add max and min values  (done... 2 weeks later)
			//holy fuck this is so unfinished ;w;
		)
		.setFooter("x3")
		.setTimestamp()

		msg.channel.send({ embeds: [miscHelpEmbed] });
	} else if(msg.content === `${prefix}mod` || msg.content === `${prefix}moderation`)
	{
		const modEmebd = new MessageEmbed()
		.setColor('DARK_NAVY')
		.setTitle("Moderation!")
		.setDescription("Commands that help you control your server")
		.addFields(
			{name: "ban", value: "bans a user from your guild"},
			{name: "purge", value: "removes however many messages you need to delete"} //change this later aswell lol
		)
		.setFooter("8)")
		.setTimestamp()

		msg.channel.send({ embeds: [modEmebd] });
	} else if(msg.content === `${prefix}utility`) 
	{
		const utilityHelp = new MessageEmbed()
		.setColor('DARK_BUT_NOT_BLACK')
		.setTitle("Utility")
		.setDescription("some other cool commands that I have")
		.addFields(
			{name: "changelog", value: "shows the most recent changes to me!"},
			{name: "invite", value: "use this to invite me to your server!"},
			// {name: "repository", value: "this takes you to my github repository"}
		)
		.setFooter("B3")
		.setTimestamp()

		msg.channel.send({ embeds: [utilityHelp] });
	}
}
if(msg.content === `${prefix}help` || msg.content === `${prefix}help fun` || msg.content === `${prefix}fun` || msg.content === `${prefix}other` || msg.content === `${prefix}misc` || msg.content === `${prefix}mod` || msg.content === `${prefix}moderation` || msg.content === `${prefix}utility`) helpEmbeds();

//actual main script stuff now

//changelog
if(msg.content === `${prefix}changelog`)
{
	const changelogEmebd = new MessageEmbed()
	.setColor('GREEN')
	.setTitle("Changelog")
	.setDescription("** **")
	.addFields(
		{name: "bugfixes:", value: "\n no bugs!"},
		{name: "new features/changes:", value: /*"\nhi! version 2.0 of protobot is here! here\'s a few of PB\'s new features! \n - added"*/"\n nothing new yet ;3"}
	)
	.setFooter("v1.5"/*"v2.0"*/)
	.setTimestamp()

	msg.channel.send({ embeds: [changelogEmebd] });
}

//owoify
if(msg.content.startsWith(prefix + "owoify"))
{
	if(msg.content === prefix + "owoify") return msg.reply("i cant do that to air!");

	//get content
	var o = msg.content.replace("p!owoify ", "");

	//send owoified msg
	msg.channel.send(owo.translate(o));
} //fuck

//say
if(msg.content.startsWith(prefix + "say"))
{
	if(msg.content === prefix + "say") return msg.reply("say what?");

	//get stuff to say
	var o = msg.content.replace("p!say ", "");

	//delete then say message
	if(msg.content != "p!say") msg.delete().then(msg.channel.send(o));
}

//rng
if(msg.content.startsWith(`${prefix}rng`))
{
	const rngArgs = msg.content.split(" ").slice(1);
	//min value is index 0
	//max value is index 1

	if(rngArgs[0] == undefined || rngArgs[1] == undefined) return msg.channel.send("you must give me the min and max values for the rng to work");

	var no_name = Math.round(Math.random() * (rngArgs[1] - rngArgs[0]))

	msg.channel.send({
		embeds: [new MessageEmbed()
			.setDescription(no_name.toString())
			.setTimestamp()
		]
	});
} //brb lol

//special command for raccy waccy :3
if(msg.content === `${prefix}hi` && msg.author.id === "638120368816521236") {
	msg.channel.send("hi raccy waccy :3");
} else if(msg.content === `${prefix}hi`) {
	msg.channel.send("hi!");
}

//tts command
if(msg.content.startsWith(`${prefix}tts`))
{
	if(!msg.member.permissions.has('SEND_TTS_MESSAGES')) return msg.reply("you can\'t use this command!") //why isnt intellisense working >:(

	if(!msg.guild.me.permissions.has('SEND_TTS_MESSAGES')) return msg.reply("i don\'t have the permission to send TTS messages")

	var talktosomeone = msg.content.replace(prefix  +  "tts ", "");

	msg.delete();

	talktosomeone === "" ? msg.reply("give me something to say") : msg.channel.send({ content: talktosomeone, tts: talktosomeone });
}

//for devcommands lol
const b = msg.content.replace("p!", "").split(" ");

if(devcommands.includes(b[0]))
{
	//check if user is in devs.toaster
	fs.readFile('../secrets/settings/devs.toaster', 'utf8', (err, data) => {
		if(err) return console.error(err + "\nthere has been an error with checking devs.");

		//turn data into array then check if user id matches one from data
		var devs = data.toString().split("\n");
		if(!devs.includes(msg.author.id)) return msg.reply("you can\'t use these commands!");
	});

	//next check which command dev wants to use
	const command = b[0];

	if(command == devcommands[1])
	{
		//delete message
		msg.delete();

		//send message >:3
		msg.channel.send(`<@${msg.mentions.users.first().id}> boop :3`);
	} else if(command == devcommands[0])
	{
		const errCode = b[1];

		if(errCode == undefined) return msg.reply("come on, you have to give me an exit code " + `<@${msg.author.id}> :|`);

		console.log("process terminated with code " + errCode);

		process.kill(process.pid, 'SIGTERM');
	} else if(command == devcommands[2])
	{
		await exec('C:\\Users\\Owner\\Documents\\GitHub\\ProtoBot\\index.js', function (error, stdout, stderr) {
			if(error) return console.error(error + "\nthere has been an error with opening index.js");

			console.log("stdout: " + stdout);
			console.log("stderr: " + stderr);
		});
	}
}

//timer
if(msg.content.startsWith(`${prefix}timer`))
{
	if(msg.content === `${prefix}timer`) return msg.reply("how long would you like the timer?");

	//m
	var thefitnessgrampacertest = 0;

	//args
	var itstimetomakethingsriiiiiight = msg.content.split(' ');

	//get number
	var youandimustfightforourliiiiiives = Number(itstimetomakethingsriiiiiight[1]);

	//get type
	var cydonia = itstimetomakethingsriiiiiight[2];

	//sort
	if(cydonia === "s" || cydonia === "seconds" || cydonia === "secs")
	{
		thefitnessgrampacertest = 1000;
	} else if(cydonia === "mins" || cydonia === "minutes")
	{
		thefitnessgrampacertest = 60000;
	} else if(cydonia === "hours" || cydonia === "h" || cydonia === "hrs")
	{
		thefitnessgrampacertest = 3600000;
	} else if(cydonia === "days" || cydonia === "d")
	{
		thefitnessgrampacertest = 86400000;
	}

	//create full timer
	youandimustfightforourliiiiiives = youandimustfightforourliiiiiives * thefitnessgrampacertest;

	//remove time and type
	for(var i = 0; i < 3; i++)
	{
		itstimetomakethingsriiiiiight.shift();
	}

	//put args in an actual sentence
	var hot = "";

	for(var i = 0; i <= itstimetomakethingsriiiiiight.length - 1; i++)
	{
		hot = hot + " " + itstimetomakethingsriiiiiight[i];
	}


	//zzz...
	msg.reply(`ok. set a timer for ${youandimustfightforourliiiiiives / thefitnessgrampacertest} ${cydonia}.\n message: ${hot === "" ? "N/A" : hot}`);

	await sleep(youandimustfightforourliiiiiives);

	msg.reply("your time is up!");
}

//random hex colour
if(msg.content.startsWith())


//repo
//if(msg.content === prefix + "repo" || msg.content === prefix + "repository" || msg.content === prefix + "github") return msg.channel.send("here is my repository \n " + urls.repo);

//invite
	if (msg.content === prefix + "invite") return msg.channel.send("heres the link to invite me! \n" + urls.inviteLink); //wfeiowefjwoefwjio

//i think thats all for this file :D
});

//login
client.login(botToken);

//i hate coding in notepad OIWFJOIJEOfewpor43]t3\t[45yea









//nya