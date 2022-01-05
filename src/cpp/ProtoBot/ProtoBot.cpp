#include <dpp/dpp.h>
#include <iostream>
#include <string>
#include "req/frw.hpp"

int main() {
	fileManip fmp;

	dpp::cluster bot(fmp.getLine("token.txt"));

	bot.on_ready([&bot](const auto& event) {
		std::cout << "ready!";
	});

	bot.on_message_create([&bot](const auto& event) {
		if (event.msg.content == "p!cppTest") {
			bot.message_create(dpp::message(event.msg.channel_id, "test"));
		}
	});

	bot.start(false);

	return 0;
}