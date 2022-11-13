import { Client } from 'discord.js';

export default (client: Client) => {
    client.on('interactionCreate', interaction => {
        if (!interaction.isChatInputCommand()) return;
        const command = (client as any).commands.get(interaction.commandName);
        if (!command) return;
        command.execute(interaction);
    });
};
