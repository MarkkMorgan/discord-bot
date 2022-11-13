const { Client, GatewayIntentBits } = require('discord.js');
import { Collection } from 'discord.js';
import { registerEvents } from '../components/registerEvents';
import { refreshSlashCommands } from '../components/updateSlashCommands';
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

const getCommands = () => {
    client.commands = new Collection();
    const commandsPath = path.join('../', 'commands');
    const commandFiles = fs.readdirSync('../commands')

    for (const file of commandFiles) {
        const filePath = path.join('../commands', file);
        const command = require(filePath);
        if (command['data'] && command['execute']) {
            client.commands.set(command.data.name, command);
        }
    }
};

// getCommands()

registerEvents(client);
refreshSlashCommands();

client.login(process.env.TOKEN);