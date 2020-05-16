const Discord = require('discord.js');
const superagent = require('superagent')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Je suis prête !');
});

//mpall
client.on('message', async message => {
	if(message.content === "$dmall") {
		let args = message.content.split(" ").join(" ").slice(7);
        message.guild.members.forEach(member => { 
        	member.send(args) 
  }) 
 } 
})

//nsfw
bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'hass')){
        message.delete()
  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hass'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("This isn't NSFW channel!")
  }
}}

bot.on('message' , function(message){
	if(message.content.includes(config.prefix + 'coffee')){
        message.delete()
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'coffee'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
}}






client.login(config.token);