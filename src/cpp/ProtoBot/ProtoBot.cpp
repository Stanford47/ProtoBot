#include <dpp/dpp.h>
#include <iostream>
#include <string>
#include "req/pbcl.hpp"

int main()
{
	PBR::FS::fileManip fm;

	dpp::cluster bot(fm.getLine("token.txt"));

	bot.on_ready([&bot](const auto &event)
				 { std::cout << "ready!"; });

	bot.on_message_create([&bot](const auto &event)
						  {
		if (event.msg.content == "p!cppTest") {
			bot.message_create(dpp::message(event.msg.channel_id, "test"));
		}

		if(event.msg.content == "p!filePath") {
			bot.message_create(dpp::message(event.msg.channel_id, efs.get_path()));
		}	

		/*
		Any header files or functions that you make outside of this file, pls put in req folder
		*/ });

	bot.start(false);

	return 0;
}