const Discord=require("discord.js");
const client=new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
// const config = require("./config.json")

client.on("message", message=>{
    console.log('Bot is ready!')

    console.log("Read message: "+message.content)

    if(message.content==="!hello")
    message.channel.send("hello")

    if(message.content==="!ping")
    message.channel.send("pong")

    if(message.content==="!avatar")
    message.reply(message.author.displayAvatarURL())
})

client.login(process.env.DJS_TOKEN)
