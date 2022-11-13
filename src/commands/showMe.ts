const { SlashCommandBuilder } = require('discord.js');
import { Interaction } from 'discord.js';

export default {
    data: new SlashCommandBuilder().setName('jamal').setDescription('Pokazuje jamala'),
    async execute(interaction: Interaction) {
        await interaction.channel?.send({
            files: ['https://i.ibb.co/2N2zwYL/pobrane-10.jpg'],
        });
    },
};
