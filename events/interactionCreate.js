module.exports = {
    name:'interactionCreate',
    
    async execute(interaction){
        if(interaction.isCommand()){
            const command = interaction.client.commands.get(interaction.commandName);
        
            // if(!command)return;
            
            try {
                console.log(`${interaction.user.tag} in ${interaction.channel.name} triggered an interaction.`);

                await command.execute(interaction);
            } catch (error) {
                console.error(error);

                await interaction.reply({
                    content:'There was an error while executing this command, ask a mod for help',
                    ephemeral:true,
                });
            }
        } 
        if(interaction.isButton()){
            if(interaction.customId.includes('primary')){
                await interaction.reply('Clicked Primary button');
            }  
        }        
    },
};