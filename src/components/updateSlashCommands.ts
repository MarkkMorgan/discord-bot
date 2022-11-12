const fs = require('node:fs');
const path = require('node:path');

const commands: any = [];

const updateCommands = () => {
    client.commands = new Collection();
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter((file: any) => file.endsWith('.ts'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }

    const deployAndRefreshCommands = async () => {
        try {
            const rest = new REST({ version: '10' }).setToken(TOKEN);

            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(Routes.applicationGuildCommands(client.user.id), {
                body: { name: 'jamal', description: 'Pokazuje jamala' },
            });

            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (err) {}
    };
};
