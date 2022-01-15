const Discord=require("discord.js");
const bot=new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
// const config = require("./config.json")

bot.once("ready", () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    
bot.on("message", async msg=>{
    console.log("Read message: "+msg.content)

    if(msg.content==="!ping")
    msg.reply("pong")

    if(msg.content==="!help")
    msg.channel.send("ok")
    
    if(msg.content==="!ethereum")
    msg.channel.send("ETH Price is: ")
    
    if(msg.content==="!hashrate")
    msg.channel.send("Hashrate is: ")
    
    if(msg.content==="!block")
    msg.channel.send("Pool found last block : ")
    
    
    if(msg.content==="!avatar")
    msg.reply(message.author.displayAvatarURL())
})

bot.login(process.env.DJS_TOKEN)
