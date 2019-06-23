const listen = function (msg, config) {
    let args = msg.content.substring(1).split(" ");
    let cmd = args[0];
    let commandIndex = Object.keys(config.commands).indexOf(cmd); 
    let commandExists = commandIndex >= 0 ? true : false;
    //let commandHouseIndex = config.houses.indexOf(cmd);
    //let commandProfessionIndex = config.professions.indexOf(cmd);
    //let commandIsHouse = commandHouseIndex >= 0 ? true : false;
    //let commandIsProfession = commandProfessionIndex >= 0 ? true : false;
    
    args = args.splice(1);

    //if (commandIsHouse) commands["house"].callback(msg, new Array(config.houses[commandHouseIndex]));
    //else if (commandIsProfession) commands["profession"].callback(msg, new Array(config.professions[commandProfessionIndex]));
    
    if (commandExists) 
        config.commands[cmd].callback(msg, args, config);
};

module.exports = {
    listen
};