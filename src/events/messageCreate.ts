import { Client } from 'discord.js';
const messsageVariants = require('../data/messageVariants.json');

export default (client: Client) => {
    client.on('messageCreate', (message) => {
        const messageVariant = Object.keys(messsageVariants).find(messageVariant => message.content.toLowerCase().includes(messageVariant.toLowerCase()));
        if (messageVariant) message.reply(messsageVariants[messageVariant.toLowerCase()]);
    });
}