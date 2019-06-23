const Discord = require("discord.js");

const showCommands = function (msg, args, config) {

    let prefixes = config.prefixes;

    let helpMsg = new Discord.RichEmbed()
        .setColor(config.colors.general)
        .setTitle(`${config.botName} Commands`)
        .setDescription(`${config.botName} will listen to these commands if typed with a ${prefixes} prefix typed before them, like "!help" or "&house gryffindor.`);

    Object.keys(config.commands).forEach(cmd => {
        let commandDescription = config.commands[cmd].description;
        helpMsg.addField(cmd, config.botName + " " + commandDescription, false);
    });
    
    msg.channel.send(helpMsg);
};

const showAreas = function (msg, args, config) {
    let areas = config.municipalities;

    let areaMsg = new Discord.RichEmbed()
        .setColor(config.colors.general)
        .setTitle(`${config.botName} Areas`)
        .setDescription(`${config.botName} will add the following roles if you type a prefix and iam, like "!iam yardley".`);

    areas.forEach(area => {
        areaMsg.addField("", area, false);
    });

    msg.channel.send(areaMsg);
};

module.exports = {
    showCommands,
    showAreas
};