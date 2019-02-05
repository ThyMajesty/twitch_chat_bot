const tmi = require('tmi.js');
let commands = require('./commands').commands;
const events = require('./events').events;
const BotFunctions = require('./botFunctions.js').BotFunctions;

exports.ChatBot = class ChatBot {
    constructor(options) {
        this.botClient = new tmi.client(options);
        this.botClient.on('message', this.onMessageHandler.bind(this));
        this.botClient.on('connected', this.onConnectedHandler.bind(this));
        this.botFunctions = new BotFunctions(commands);
        this.events = events;
        this.connect();
    }

    connect() {
        this.botClient.connect();
        this.createEvents();
    }

    onConnectedHandler(addr, port) {
        console.log(`* Connected to ${addr}:${port}`);
    }

    onMessageHandler(target, context, msg, self) {
        if (self) {
            return;
        }
        const response = this.botFunctions.executeCommand(target, context, msg, self);
        console.log(response);
        this.botClient.say(target, response);
    }

    createEvents() {
        this.events.map(el => {
            setInterval(() => {
                console.log(el.command());
                this.botClient.say('#thymajesty',el.command())
            }, el.time);
        });
    }
};