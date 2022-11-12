import { Client, Message } from 'discord.js';
const possibleMessages = require('./possibleMessages.json');

export default (client: Client) => {
    client.on('messageCreate', (message) => {
        if (possibleMessages[message.content]) {
            message.reply(possibleMessages[message.content]);
        }
    });
}

