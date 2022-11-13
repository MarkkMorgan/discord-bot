import { Client } from 'discord.js';
const messsageVariants = require('../data/messageVariants.json');

export default (client: Client) => {
    client.on('messageCreate', (message) => {
        if (messsageVariants[message.content.toLowerCase()] || messsageVariants[message.content.toLowerCase()]) message.reply(messsageVariants[message.content.toLowerCase()]);
    });
}