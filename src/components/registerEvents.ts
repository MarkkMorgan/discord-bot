import { Client } from 'discord.js';

const fs = require('node:fs');
const path = require('node:path');

export const registerEvents = async (client: Client) => {
    const eventsPath = path.join('./src', 'events');
    const commandFiles: string[] = fs.readdirSync(eventsPath);
    for (const file of commandFiles) {
        const { default: registerEventFunc } = await import(`../events/${file}`);
        registerEventFunc(client);
    }
};