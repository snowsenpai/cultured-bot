module.exports = {
    name:'messageCreate',
    async execute(message){
        if(message.content === "hi"){
            console.log('messages works');
            await message.channel.send('Hello, welcome to the server');
        }
    },
};