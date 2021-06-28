const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require("../../config.json");
client.on('ready', () => {
	console.log('ready');
});
client.on('message', async msg => {
	if(msg.author.bot) {
	return;
	}
	if(!msg.content.startsWith(prefix)) {
	return;
	}
	/*
	===========================> EMBEDS HERE <==================================
	*/
	function EmbedColours(EmbedColor, Command, ERNG) {
		for(i = 10, i > 0; i--;) {
		ERNG = Math.round(Math.random()*4)
		if(ERNG == 4) {
			ERNG = ERNG - 1
		}
		console.log(ERNG)
		}
		
		let HEC = ['#6D94B7','#79E7C0','#D1565D','#D480CE'];
		Command = msg.content.replace("p!", "")
		if(Command === `help`) {
		EmbedColor = HEC[ERNG];
		} else if (Command === "misc-help" || "misc" || "fun") {
		HEC = ['#47747e', '#7e4747', '#e9e130', '#815ddd'];
		EmbedColor = HEC[ERNG]
		}
		return EmbedColor;
	}
		let eColour = EmbedColours()
	console.log(eColour)
	if(msg.content === `${prefix}help`){ 
		const helpEmbed = new Discord.MessageEmbed()
		.setColor(eColour)
		.setTitle("Help")
		.setDescription(owo.translate(`remember that my prefix is __${prefix}__!`))
		.addFields(
			{name:"changelog", value:owo.translate("shows a list of the most recent changes to me")},
			{name:"invite", value:owo.translate("a link to invite me to your server")},
			{name:"fun", value:owo.translate("just some random fun commands i have")}
		)
		.setFooter(":3")
		.setTimestamp()
		msg.channel.send(helpEmbed)
	} else if (msg.content === `${prefix}misc-help` || msg.content === `${prefix}misc` || msg.content === `${prefix}fun`) {
		const mischelpEmbed = new Discord.MessageEmbed()
		.setColor(eColour)
		.setTitle("Fun")
		.setDescription(owo.translate("dummy text :P"))
		.addFields(
			{name:"owoify", value:owo.translate("makes your text look much better (idk change this later maybe lmao)")},
			{name:"rng", value:owo.translate("I give you a random number of your choosing")}, //change this pls i am literally cringing
			{name:"rock paper scissors", value:owo.translate("you get to play rock paper scissors with me! (say p!rps or p!rps for help)")}
		)
		.setFooter(":)")
		.setTimestamp()
		msg.channel.send(mischelpEmbed)
	}
	//fix embed colour bug later
	/*
	============> END OF EMBEDS <============
	*/

	//CHECKPOINT
	if(!msg.content === `${prefix}misc-help` || !msg.content === `${prefix}misc` || !msg.content === `${prefix}fun`) {
		!msg.channel.send(mischelpEmbed)
	}




	/*
	============> MAIN COMMANDS <============
	*/

	//changelog here
	function changelogEm(changelogEmbed, CRNG) {
		for(clcrng = 10, clcrng > 0; clcrng--;) {
			CRNG = Math.round(Math.random()*4)
		}
		let changelogColour = ["FFFFFF", "FFFFFF", "0F0F0F", "000000"]
		changelogEmbed = new Discord.MessageEmbed()
		.setColor(changelogColour[CRNG]) //change colour later
		.setTitle("Changelog")
		.setDescription("new stuff")
		.addFields(
			{name:"bugfixes/known bugs", value:"**Known bug(s):** \n no bugs have been found :) \n **Fixed bug(s):** \n none at the moment..."},
			{name:"new features", value:" - **there are new permissions that are required for the bot. please use the invite command to get the update :)** \n - readded the repository command", inline:true}
		)
		.setFooter(owo.translate("more info can be found on the github repo! | ver. 1.1"))
		.setTimestamp()
		return changelogEmbed;
	}
	cE = changelogEm()
	if(msg.content === `${prefix}changelog`) {
		msg.channel.send(cE)
	}
	//end of changelog

	//invite command here
	if(msg.content === `${prefix}invite`) {
		msg.channel.send("https://discord.com/api/oauth2/authorize?client_id=816003326990221373&permissions=2184576064&scope=bot") //put in link when able
	}
	//end of invite

	//owoify here
	function owoifyThis(owoification) {
		const howdoyounotknowthis = [owo.translate("give me something to owoify!"), owo.translate("I cant owoify air!")]
		let bruhh = Math.round(Math.random()*2)
		if(bruhh == 2) {
			bruhh = 1
		}
		if(msg.content === `${prefix}owoify`) {
			msg.reply(howdoyounotknowthis[bruhh])
		} else if(msg.content.startsWith(`${prefix}owoify`)) {
		owoification = msg.content.replace("p!owoify ", "")
		if(owoification === "") {
			msg.reply(howdoyounotknowthis[bruhh])	
		} else {
			msg.channel.send(owo.translate(owoification))
		}
	}
	}
	if(msg.content.startsWith(`${prefix}owoify`)) {
		owoifyThis();
	}
	//end of owoify

	function rngbelike(numberChosen) {
		numberChosen = msg.content.replace("p!rng ", "")
		if(numberChosen > 0) {
		let rngCommand = Math.round(Math.random()*numberChosen)
		msg.channel.send(rngCommand)
		} else {
			msg.reply(owo.translate("your number must be greater than 0!"))
		}
	}
	if(msg.content === `${prefix}rng`) {
		msg.channel.send("choose a number greater than 0 for the limits of the rng") //change text later
	} else if (msg.content.startsWith(`${prefix}rng `)) {
		rngbelike();
	}
	//end of rng

	/*
	============> END OF MAIN COMMANDS <============
	*/





	/*
	============> START OTHER COMMANDS <============
	*/

	//die here
	function protobotisdiesadness(whywouldyoudothis) {
		const dontkilproto = [":(", "\\*sad protogen noises\\*", owo.translate("thats not nice :("), owo.translate("no"), owo.translate("no you"), owo.translate("bad!")];
		let thispartisannoyingtbh = Math.round(Math.random()*6)
		if(thispartisannoyingtbh == 6) {
			thispartisannoyingtbh = 5
		}
		whywouldyoudothis = dontkilproto[thispartisannoyingtbh]

		return whywouldyoudothis;
	}
	let protowontdie = protobotisdiesadness()
	if(msg.content === `${prefix}die`) {
		if(protowontdie === owo.translate("thats not nice :(") || protowontdie === owo.translate("no") || protowontdie === owo.translate("no you") || protowontdie === owo.translate("bad!")) {
			msg.reply(protowontdie)
		} else if (protowontdie === ":(" || protowontdie === "\\*sad protogen noises\\*"){
			msg.channel.send(protowontdie)
		}
	}
	//end of die

	//uwu and owo commands here
	function uwuowo() {
		if(msg.content === `${prefix}uwu` || msg.content === `${prefix}owo`) {
			let uwutxt = Math.round(Math.random()*3)
			const thething = [":3", "owo", "uwu"];
			msg.channel.send(thething[uwutxt])
		}
	}
	if(msg.content === `${prefix}uwu` || `${prefix}owo`) {
		uwuowo();
	}
	//end of uwu/owo commands

	//h and j commands here
	function horj() {
		//racc is pretty cool tbh
		if(msg.content === `${prefix}h`) {
			msg.channel.send(owo.translate("h is the best letter!"))
		} else if(msg.content === `${prefix}j`) {
			let jkindasucks = Math.round(Math.random()*20)
			if(jkindasucks < 18) {
				msg.channel.send(owo.translate("j is not as good as h"))
			} else {
				msg.channel.send('racc says, "j is objectively the best letter." ')
			}
		}
	}
	if(msg.content === `${prefix}j` || msg.content === `${prefix}h`) {
		horj();
	}
	//end of h and j

	//bruh moment here
	function whynotuseacommandlmao(lmao) {
		const youarequitethebruhmoment = ["hello!", "hi!", "yes?", "you need me?", "?", "..."]
		let youarestillabruhmoment = Math.round(Math.random()*6)
		if(youarestillabruhmoment == 6) {
			youarestillabruhmoment = 5
		}
		lmao = youarequitethebruhmoment[youarestillabruhmoment]
		return lmao;
	}
	let imstilllaughing = whynotuseacommandlmao()
	if(msg.content === prefix) {
		msg.channel.send(imstilllaughing)
	}
	//end of bruh moment 

	/*
	============> END OTHER COMMANDS <=============
	*/






	/*
	============> START UTILITIES <============
	*/

	//uptime here
	function plsStayawake(final) {
	let botUptime = client.uptime
	if(msg.content === `${prefix}uptime seconds`) {
		final = botUptime / 1000 + " seconds"
	} else if (msg.content === `${prefix}uptime minutes`) {
		final = botUptime / 60000 + " minutes"
	} else if (msg.content === `${prefix}uptime hours`) {
		final = botUptime / 3600000 + " hours"
	} else if (msg.content === `${prefix}uptime days`) {
		final = botUptime / 86400000 + " days"
	}
	return final;
	}
	let BU = plsStayawake();
	if(msg.content.startsWith(`${prefix}uptime`)) {
		msg.channel.send(BU)
	}
	//end uptime

	//repo here
	if(msg.content === `${prefix}repo` || msg.content === `${prefix}repository` || msg.content === `${prefix}github`) {
		msg.channel.send(owo.translate("Heres my GitHub repository! \n https://github.com/Stanford47/ProtoBot"));
	}

	//botkiller
	if(msg.content === `${prefix}water`) {
		msg.channel.send("")
	}
});
client.login(botToken)