const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Display your user info'),
    async execute(interaction){
        await interaction.reply(`Your tag:${interaction.user.tag}\nYour id:${interaction.user.tag}`);
    },
};