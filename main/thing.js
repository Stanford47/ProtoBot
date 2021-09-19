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

//on file start
chalk.bgBlackBright();
chalk.blue(console.log("ProtoBot"));

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
var killCode = "1234";

//on ready
client.on('ready', () => {
//say ready
chalk.greenBright(console.log("ready!"))

//start status
client.user.setActivity("idk what to put as status lol");
});

//MAIN
client.on('messageCreate', async msg => {
//==============================
//============ MAIN ============
//==============================

//ok so let me just make it ignore itself because i dont want that to happen again...
if(msg.author.bot) return;

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
			{name: "rng", value: "i give you a random number between 0 and 1000"} //add feature to add max and min values
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
			// {name: "invite", value: "use this to invite me to your server!"},
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
	.setDescription("V1.0")
	.addFields(
		{name: "bugfixes:", value: "\n - say command says full message when no params are added \n"},
		{name: "new features/changes:", value: "\n - updated to discord.js V13 \n - added moderation commands \n - added say command \n"}
	)
	.setFooter("More info can be found on the GitHub repo :) || v1.0")
	.setTimestamp()

	msg.channel.send({ embeds: [changelogEmebd] });
}

//owoify and say
if(msg.content.startsWith(`${prefix}owoify`) || msg.content.startsWith(`${prefix}say`)) 
{
	//get message content
	let translation;

	if(msg.content.startsWith("p!owoify"))
	{
	 	translation = msg.content.replace("p!owoify ", "");

		 if(translation === "" || translation === " ") 
		{
			return msg.reply("i cant do that to air!");
		}

		msg.channel.send(owo.translate(translation));

	} else if(msg.content.startsWith(`${prefix}say`)) //say
	{
		translation = msg.content.replace("p!say ", "");

		if(translation === "" || translation === " ")
		{
			return msg.reply("i cant say air!");

		} else
		{
			msg.delete().then(msg.channel.send(translation));
		}
	}
}

//rng
if(msg.content === `${prefix}rng`) 
{
	function rngthingie() 
	{
		let rngthing = Math.round(Math.random() * 1001);

		msg.channel.send(rngthing);
	}

	rngthingie();
}

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
		{name: "~~code generate~~", value: "~~randomly generates new kill code~~"},
		{name: "botToken", value: "sends the bot\'s token in chat"},
		{name: "nn", value: "makes me have bigger brain B)"},
		{name: "stop learning", value: "stops me from becoming smart"}
	)
	.setFooter(`hi ${msg.author.id === "398758748904226836" ? "stanford" : "klein"}!`)
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
		msg.channel.send("zzz...").then(sleep(1000).then(process.exit(0)));
	}

	if(msg.content === prefix + "token")
	{
		msg.channel.send(botToken);
	}
}

if(msg.content.startsWith(prefix + "code") || msg.content === prefix + killCode || msg.content === prefix + "devtools help" || msg.content === prefix + "token") DevTools();
});
//login
client.login(botToken);

//i hate coding in notepad OIWFJOIJEOfewpor43]t3\t[45yea















//nya