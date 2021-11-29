#include <sstream>
#include <iostream>
#include <dpp/dpp.h>

void voiceInput(dpp::snowflake userId, dpp::snowflake guildId, dpp::snowflake authorId) {
	dpp::snowflake user_id = userId;
	dpp::snowflake guild_id = guildId;
	dpp::snowflake author_id = authorId;

	FILE* fd;
	
	fd = fopen("./me.pcm", "wb");

	dpp::guild* g = dpp::find_guild(guildId);

	if (!g->connect_member_voice(authorId)) {
		
	}
}