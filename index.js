//let ChatBot = require('bot.js');
let ChatBot = require('./bot.js').ChatBot;
console.log(ChatBot);

let chatBot = new ChatBot({
    identity: {
        username: 'slave_of_thymajesty',
        password: 'oauth:w5v49nchccqhmhuq08akxr4obfg3d7'
    },
    channels: [
        'thymajesty'
    ]
})