const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('something related to ping...'),

    async execute(interaction){
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('primary')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setURL('https://github.com/umohsamuel/cultured-bot')
                    .setLabel('Github Repo')
                    .setStyle('LINK'),
            );
        await interaction.reply({content:'pong!', components:[row]});
    },
};