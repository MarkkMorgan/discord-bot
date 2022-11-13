const { REST, Routes } = require('discord.js');
const fs = require('node:fs');

const commands: any[] = [];

const updateCommands = () => {
    const commandFiles: string[] = fs.readdirSync('./src/commands');
    commandFiles.forEach(file => {
        const command = require(`../commands/${file}`);
        commands.push(command.default.data.toJSON());
    });
};

export const refreshSlashCommands = async () => {
    try {
        updateCommands();
        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
            body: commands,
        });

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (err) {
        console.error(err);
    }
};
