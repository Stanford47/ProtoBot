#include <dpp/dpp.h>
#include <iostream>
#include <string>
#include "req/pbcl.hpp"


int main()
{
	dpp::cluster bot(pb::fs::read_file("token.txt"));

	dpp::commandhandler command_handler(&bot);

	command_handler.add_prefix("p!");

	bot.on_ready([&command_handler](const dpp::ready_t &event) 
		{

		});

	bot.start(false);

	return 0;
}