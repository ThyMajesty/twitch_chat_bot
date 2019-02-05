/*let normalizedPath = require('path').join(__dirname, 'functions');
require('fs').readdirSync(normalizedPath).forEach(function(file) {
    require('./functions/' + file);
});*/



exports.BotFunctions = class BotFunctions {
    constructor(commands) {
        this.commands = commands;
    }

    executeCommand(target, context, msg, self) {
        //console.log(msg);
        let response = '',
            commandObject = this.extractCommand(msg.split(' '));
        console.log(commandObject);
        if (commandObject) {
            this.commands.map(el => {
                if(el.name === commandObject.command) {
                    response = el.command.call(this, commandObject.args.slice(0, el.argsCount));
                }
            });
        }
        return response;
    }

    extractCommand(msgArr) {
        let commandNames = this.commands.map(el => el.name);
        let command = '';
        let args = [];
        for (let i = 0; i < commandNames.length; i++) {
            for(let j = 0; j < msgArr.length; j++) {
                if (commandNames[i] === msgArr[j]) {
                    command = commandNames[i];
                    args = msgArr.slice(j+1);
                    return {command: command, args: args};
                }
            }
        }
        return false;
    }
}