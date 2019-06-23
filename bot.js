const auth = require("./private/auth.json");
const config = require("./config.js");
const Discord = require("discord.js");
const listen = require("./modules/controllers/command.js").listen;

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag} - ${bot.user.username}!`);
});

bot.on('message', msg => {
    // ignore bots
    if (msg.author.bot) return;

    // listen for commands by prefix(es)
    config.prefixes.forEach (prefix => {
      if (msg.content.startsWith(prefix)) listen(msg, config);
    });
});

bot.login(auth.token);