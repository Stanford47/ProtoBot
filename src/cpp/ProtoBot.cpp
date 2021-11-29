#include <dpp/dpp.h>
#include <iostream>

int main() {
	dpp::cluster bot("ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.Me8TXRTf3DXHz24oDW4ioLDTBY8");

	bot.on_ready([&bot](const dpp::ready_t& event) {
		std::cout << "ready";
	});

	bot.on_message_create([&bot](const dpp::message_create_t& event) {
		if (event.msg->content == "p!cpp") {
			bot.message_create(dpp::message(event.msg->channel_id, "your mom"));
		}
	});

	bot.start(false);

	return 0;
}