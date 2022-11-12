const { SlashCommandBuilder } = require('discord.js');
import { Interaction } from 'discord.js';

const command = new SlashCommandBuilder().setName('jamal').setDescription('Pokazuje losowego jamala.');

module.exports = {
    data: command,
    async execute(interaction: Interaction) {
        await interaction.channel?.send({
            files: ['https://media.distractify.com/brand-img/3JWAIT4PU/2160x1130/jamale-meme-tiktok-1666816782403.jpg'],
        });
    },
};
