import { Client, Collection, Interaction } from 'discord.js';
const fs = require('node:fs');
const path = require('node:path');
// const getCommands = (client: Client) => {
//     (client as any).commands = new Collection();
//     const commandsPath = path.join('./src', 'commands');
//     const commandFiles = fs.readdirSync('../commands')

//     for (const file of commandFiles) {
//         const filePath = path.join(commandsPath, file);
//         const command = require(filePath);
//         if (command['data'] && command['execute']) {
//             (client as any).commands.set(command.data.name, command);
//         }
//     }
//     return client
// };


export default (client: Client) => {
    client.on('interactionCreate', (interaction: Interaction) => {
        if (!interaction.isChatInputCommand()) return;
        const command = (client as any).commands.get(interaction.commandName);
        if (!command) return;
        command.execute(interaction);
    });
};
