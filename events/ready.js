module.exports ={
    name:'ready',
    once: true,
    execute(client){
        console.log(`Client is logged in as ${client.user.tag}`);
    },
};