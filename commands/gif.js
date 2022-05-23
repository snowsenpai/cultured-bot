const axios = require('axios').default;
const {SlashCommandBuilder} = require('@discordjs/builders');
// const {MessageEmbed} = require('discord.js');
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
        console.log(gif);


        // const gifEmbed = new MessageEmbed()
        //     .setColor('#0099ff')
        //     .setThumbnail('https://cdn.otakutale.com/wp-content/uploads/2015/10/JoJos-Bizarre-Adventure-Stardust-Crusade-Anime-Visual.jpg')
        //     .setImage(`${gif}`)
        //     .setFooter({text:'Gotten from Tenor'})
        //     ;

        await interaction.reply(gif);
    },
};