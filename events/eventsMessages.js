exports.eventMessages = [{
    name: ['hello'],
    startingTime: 3000,
    time: 1300000,
    command: function (command, name) {
        return 'Hello guys! Do not be shy say something into the chat!)';
    }
}, {
    name: ['donate'],
    startingTime: 3000,
    time: 1700000,
    command: function (command, name) {
        return 'Hey, wanna support me? Check out the description)';
    }
}];