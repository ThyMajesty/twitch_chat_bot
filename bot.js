const tmi = require('tmi.js');

class ChatBot {
    constructor(options, botFunctions, specialChars) {
        this.botClient = new tmi.client(options);
        this.botClient.on('message', this.onMessageHandler);
        this.botClient.on('connected', this.onConnectedHandler);
        this.botFunctions = new botFunctions();
        this.specialChars = specialChars;
        this.connect();
    }

    connect() {
        this.botClient.connect();
    }

    onConnectedHandler(addr, port) {
        console.log(`* Connected to ${addr}:${port}`);
    }

    onMessageHandler(target, context, msg, self) {
        let commandName = msg.trim();
        if (self || !this.specialChars.includes(commandName[0])) {
            return;
        }

        commandName = commandName.substr(1);
        const response = this.botFunctions.execute(commandName);
        this.botClient.say(target, response);
    }
}