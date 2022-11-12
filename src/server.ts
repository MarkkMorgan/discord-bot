import { Message, Interaction } from 'discord.js';
const { Client, REST, Routes, GatewayIntentBits, Events, Collection } = require('discord.js');
const { TOKEN } = require('../config.json');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on(Events.ready, () => {
    console.log('The bot is ready');
});

client.on(Events.InteractionCreate, (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;
    interaction.channel?.send({
        files: ['https://media.distractify.com/brand-img/3JWAIT4PU/2160x1130/jamale-meme-tiktok-1666816782403.jpg'],
    });
});

client.login(TOKEN);