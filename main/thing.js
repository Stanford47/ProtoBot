//yoo new protobot :D

//haha funny sandium text rng thing >:D


//btw sandium the nn embed is in devtools.js

//create sleepy thing

//Dependencies
const { setup, urls } = require('../secrets/config.json');
const chalk = require('chalk');
const { Intents, MessageEmbed, Client } = require('discord.js');
const replaceString = import('replace-string'); //fuck replaceString
const owo = require('@zuzak/owo')
const sleep = require('../secrets/sleep');
const special = require('../secrets/yom.json');
const fs = require('fs');

//on file start
chalk.bgBlackBright();
console.log(chalk.blueBright("Protobot"))

//get intents
const botIntents = require('../secrets/discordIntents');

//create client
const client = new Client({ intents: botIntents });

//redefine the config vars
const botToken = setup.botToken;
const prefix = setup.prefix;
const inviteLink = urls.inviteLink;
const repo = urls.repo;

//killcode
var killCode = "";

//on ready
client.on('ready', () => {
//say ready
console.log(chalk.greenBright("ready!"))

//start status
client.user.setActivity("wanna know a cool fact?");
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
		{name: "bugfixes:", value: "\n "},
		{name: "new features/changes:", value: "\n - now allowed to ban users who also have ban permissions and added ability to delete the user\'s messages"}
	)
	.setFooter("v1.5")
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
	function cum()
	{
		//check if they supplied any args
		if(msg.content === `${prefix}rng` || msg.content === "${prefix}rng ") return msg.reply("i cant give you a random air!"); //cringy but i like it

		//get teh teext
		var rngArgs = msg.content.split(' ');

		
		let rngArgsMAX = rngArgs[1];
		let rngArgsMIN = rngArgs[2];

		//turn into number
		rngArgsMAX = parseInt(rngArgsMAX);
		rngArgsMIN = parseInt(rngArgsMIN);

		//make sure proto doesnt explode: electric boogaloo
		if(!Number.isInteger(rngArgsMAX) && rngArgs.length > 2 || !Number.isInteger(rngArgsMIN) && rngArgs.length > 2) return msg.reply("you must give me numbers!");

		//make sure proto doesnt explode: humble beginnings
		if(rngArgs.length == 2) return msg.reply("you must give me two numbers..."); //why cant i just use those weird 1 line if statements :<

		//make sure proto doesnt explode: whatever the third installment of a series is called
		if(!Number.isFinite(rngArgsMAX) || !Number.isFinite(rngArgsMIN)) return msg.reply("those numbers are too big...");

		//return err if min > max
		if(rngArgsMIN > rngArgsMAX) return msg.reply("`min value cannot be greater than max value` \n " + rngArgsMIN + " > " + rngArgsMAX + " \n `p!rng max min`");

		//rng mometn
		var ngh = Math.round(Math.random() * (rngArgsMAX - rngArgsMIN) + rngArgsMIN);
		//embeddy weddy
		const RNGEMBED = new MessageEmbed()
		.setColor('AQUA')
		.setTitle("RNG")
		.setDescription("" + ngh + "")
		.setTimestamp()

		//send embed
		msg.channel.send({ embeds: [RNGEMBED] });
	}

	cum();
} //brb lol

//special command for raccy waccy :3
/*
if(msg.content === `${prefix}hi` && msg.author.id === "638120368816521236") {
	msg.channel.send("hi raccy waccy :3");
} else */if(msg.content === `${prefix}hi`) {
	msg.channel.send("hi!");
}

//tts command
if(msg.content.startsWith(`${prefix}tts`))
{
	if(!msg.member.permissions.has('SEND_TTS_MESSAGES')) return msg.reply("you can\'t use this command!") //why isnt intellisense working >:(

	if(!msg.guild.me.permissions.has('SEND_TTS_MESSAGES')) return msg.reply("i don\'t have the permission to send TTS messages")

	var talktosomeone = msg.content.replace(prefix  +  "tts ", "");

	talktosomeone === "" ? msg.reply("give me something to say") : msg.channel.send({ content: talktosomeone, tts: talktosomeone });
}

function DevTools()
{
	//check if user is a dev
	if(!msg.author.id === "398758748904226836" || !msg.author.id === "417047189311848448") return msg.reply("you can\'t use these commands!");

	//create devtools help
	const DevHelp = new MessageEmbed()
	.setColor('AQUA')
	.setTitle("Dev Tools")
	.setDescription("** **")
	.addFields(
		{name: "code create", value: "use this to create or change the current kill code"},
		{name: "code generate", value: "randomly generates new kill code"},
		{name: "botToken", value: "sends the bot\'s token in chat"},
		{name: "nn", value: "makes me have bigger brain B)"},
		{name: "stop learning", value: "stops me from becoming smart"}
	)
	.setFooter(`hi ${msg.author.id === "398758748904226836" ? "stanford" : "klein"}!`) //how did this work first try lmao
	.setTimestamp()

	if(msg.content === prefix + "devtools help") msg.channel.send({ embeds: [DevHelp] });

	//killCode
	if(msg.content.startsWith(`${prefix}code create`))
	{

		//check if dev made oopsie
		if(msg.content.endsWith("create")) return msg.reply(`<@${msg.author.id}>, missing argument. ` + "`CODE`");

		//get code to create
		killCode = msg.content.replace(`${prefix}code create `, "" );

		//confirm
		msg.delete()
		msg.channel.send("kill code has been logged to console.");
		console.log("new killCode: " + killCode) //piss
		return killCode;
	}

	if(msg.content === prefix + killCode)
	{
		process.exit(0);
	}

	if(msg.content === prefix + "killCode") return msg.channel.send("the current kill code is: " + killCode === "" ? "N/A" : killCode);

	if(msg.content === prefix + "token")
	{
		msg.channel.send(botToken);
	}
	
	if(msg.content === prefix + "generate code")
	{
		msg.delete();

		function uwu()
		{
			killCode = Math.round(Math.random() * 10000000);

			console.log("new kill code: " + killCode);

			

			return killCode;
		}

		uwu();

		msg.channel.send("new code has been logged to console");
	}
}
if(msg.content.startsWith(prefix + "code") || msg.content === prefix + killCode || msg.content === prefix + "devtools help" || msg.content === prefix + "token" || msg.content === prefix + "generate code" || msg.content === "p!killCode") DevTools();

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



//repo
//if(msg.content === prefix + "repo" || msg.content === prefix + "repository" || msg.content === prefix + "github") return msg.channel.send("here is my repository \n " + urls.repo);

//invite
	if (msg.content === prefix + "invite") return msg.channel.send("heres the link to invite me! \n" + urls.inviteLink); //wfeiowefjwoefwjio

/* These are the beta features that will not be released to main until ready */

//i think thats all for this file :D
});

//login
client.login(botToken);

//i hate coding in notepad OIWFJOIJEOfewpor43]t3\t[45yea















//nya