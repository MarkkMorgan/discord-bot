const { Client, GatewayIntentBits } = require('discord.js');
import { registerEvents } from '../components/registerEvents';
import { refreshSlashCommands } from '../components/updateSlashCommands';
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});
require('dotenv').config();


registerEvents(client);
refreshSlashCommands();

client.login(process.env.TOKEN);
