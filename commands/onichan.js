const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('onichan')
    .setDescription('Call out to your onichan'),
    async execute(interaction){
        await interaction.reply('Nandedayo Imoto');
    },
};