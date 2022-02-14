#include <dpp/dpp.h>
#include <iostream>
#include <string>
#include "req/pbcl.hpp"

int main()
{
	dpp::cluster bot(pb::fs::read_file("token.txt"));

	//dpp::commandhandler command_handler(&bot);

	//command_handler.add_prefix("p!");

	//bot.on_ready([&command_handler](const dpp::ready_t &event) 
		//{
			
		//});

	bot.on_ready([&](const auto& event) {
		std::cout << "Ready!" << std::endl;
		});

	bot.on_message_create([&](const auto &event) {
		if (event.msg.content.rfind("p!") == 0) {
			if (pb::utils::ends_with(event.msg.content, "cpptest"))
			{
				bot.message_create(dpp::message(event.msg.channel_id, "test."));
			}
			else if (pb::utils::ends_with(event.msg.content, "cppkill"))
			{
				if (event.msg.author.username == "Stanford47" && event.msg.author.discriminator == 3310 || event.msg.author.username == "Sandium" && event.msg.author.discriminator == 4985 || event.msg.author.username == "DEATHB4DEFEAT" && event.msg.author.discriminator == 4404)
				{
					std::exit(0);
				}
				else
				{
					bot.message_create(dpp::message(event.msg.channel_id, "You aren\'t allowed to use this command!"));
				}
			}
		}
		});

	bot.start(false);

	return 0;
}