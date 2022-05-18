const axios = require('axios').default;
const {SlashCommandBuilder} = require('@discordjs/builders');
const {tenorKey} = require('../config.json');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('gif')
    .setDescription('Send a gif')
    .addStringOption(option =>
        option.setName('query')
        .setDescription('Search for a gif')
        .setRequired(true)
        .setAutocomplete(true)
        ),

    async execute(interaction){
        const string = interaction.options.getString('query');
        
        const query = new URLSearchParams({string});
        let url = `https://g.tenor.com/v1/search?q=${query}&key=${tenorKey}`;
        
        
        const {results} = await axios.get(url)
        .then(response =>   {
            return response.data;    
        })   
        .catch(error => {console.log(error);});
        
        let index = Math.floor(Math.random() * results.length);
        let gif = results[index].url;
        await interaction.reply(gif);
    },
};