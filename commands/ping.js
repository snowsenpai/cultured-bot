const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('something related to ping...'),
    async execute(interaction){
        await interaction.reply('pong!');
    },
};