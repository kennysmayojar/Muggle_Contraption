const Discord = require("discord.js");

const isHouse = function (houseName, config) {
    return Object.keys(config.houses).includes(houseName);
};

const isProfession = function (professionName, config) {
    return Object.keys(config.professions).includes(professionName);
};

const addHouse = function (msg, args, config) {
    let houseName = args[0];
    let house = msg.guild.roles.find(role => role.name === houseName);
    let user = msg.member;
    let houseMsg;

    if (houseName === "") return;
    
    if (house) {
        if (msg.member.roles.some(house => houseName === house.name)) {
            houseMsg = new Discord.RichEmbed()
            .setColor(config.colors.error)
            .setTitle(`${msg.member.user.tag} Your house is already set to **${house.name}**.`);
        } else { 
            removeHouse(msg, config);
            user.addRole(house).catch(console.error);
            houseMsg = new Discord.RichEmbed()
                .setColor(config.colors.success)
                .setTitle(`${msg.member.user.tag} Your house is now set to **${house.name}**.`);
        }
    } else {
        houseMsg = new Discord.RichEmbed()
            .setColor(config.colors.error)
            .setTitle(`${msg.member.user.tag} **${houseName}** is not a house in the game...`);
    }

    msg.channel.send(houseMsg);
};

const addProfession = function (msg, args, config) {
    let professionName = args[0];
    let profession = msg.guild.roles.find(role => role.name === professionName);
    let user = msg.member;
    let professionMsg;

    if (professionName === "") return;
    if (profession) {
        if (msg.member.roles.some(profession => professionName === profession.name)) {
            professionMsg = new Discord.RichEmbed()
            .setColor(config.colors.error)
            .setTitle(`${msg.member.user.tag} Your profession is already set to **${profession.name}**.`);
        } else {
            removeProfession(msg, config);
            user.addRole(profession).catch(console.error);
            professionMsg = new Discord.RichEmbed()
                .setColor(config.colors.success)
                .setTitle(`${msg.member.user.tag} Your profession is now set to **${profession.name}**.`);
        }
    } else {
        professionMsg = new Discord.RichEmbed()
            .setColor(config.colors.error)
            .setTitle(`${msg.member.user.tag} **${professionName}** is not a profession in the game...`);
    }

    msg.channel.send(professionMsg);
};

const removeHouse = function (msg, config) {
    let user = msg.member;

    Object.keys(config.houses).forEach(house => {
        user.roles.find(role => {
            if (house === role.name) {
                user.removeRole(role).catch(console.error);
            }
        });
    });
};

const removeProfession = function (msg, config) {
    let user = msg.member;

    Object.keys(config.professions).forEach(profession => {
        user.roles.find(role => {
            if (profession === role.name) {
                user.removeRole(role).catch(console.error);
            }
        });
    });
};

const addLocation = function (msg, args, config) {
    let locationName = args[0];
    let location = msg.guild.roles.find(role => role.name === locationName);
    let user = msg.member;
    let locationMsg;
    
    if (locationName === "") return;
    
    if (location) {
        if (msg.member.roles.some(role => role.name === locationName)) {
            locationMsg = new Discord.RichEmbed()
                .setColor(config.colors.success)
                .setTitle(`${msg.member.user.tag} You already have the **${location.name}** role.`);
        } else {
            if (isHouse(locationName, config)) {
                removeHouse(msg, config);
            } else if (isProfession(locationName, config)) {
                removeProfession(msg, config);
            }

            user.addRole(location).catch(console.error);
            locationMsg = new Discord.RichEmbed()
                .setColor(config.colors.success)
                .setTitle(`${msg.member.user.tag} You now have the **${location.name}** role.`);
        }
    } else {
        locationMsg = new Discord.RichEmbed()
            .setColor(config.colors.error)
            .setTitle(`${msg.member.user.tag} That role is not self-assignable.`);
    }

    msg.channel.send(locationMsg);
};

const removeLocation = function (msg, args, config) {
    let locationName = args[0];
    let location = msg.guild.roles.find(role => role.name === locationName);
    let user = msg.member;
    let locationMsg;
    
    if (locationName === "") return;
    
    if (location) {
        if (msg.member.roles.some(location => locationName === location.name)) {
            user.removeRole(location).catch(console.error);
            locationMsg = new Discord.RichEmbed()
                .setColor(config.colors.success)
                .setTitle(`${msg.member.user.tag} You no longer have the **${location.name}** role.`);
        } else {
            locationMsg = new Discord.RichEmbed()
                .setColor(config.colors.error)
                .setTitle(`${msg.member.user.tag} You do not have the **${location.name}** role assigned.`);
        }
    } else {
        locationMsg = new Discord.RichEmbed()
            .setColor(config.colors.error)
            .setTitle(`${msg.member.user.tag} That role is not self-assignable.`);
    }

    msg.channel.send(locationMsg);
};

module.exports = {
    addHouse,
    addProfession,
    addLocation,
    removeHouse,
    removeProfession,
    removeLocation
};