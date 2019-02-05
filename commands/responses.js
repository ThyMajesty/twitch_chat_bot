exports.responses = [{
    name: ['хохол', 'хохлы'],
    argsCount: 2,
    command: function (command, args) {
        return `${command.charAt(0).toUpperCase() + command.slice(1)} у тебя в штанах мудила, уважай правила канала!`
    }
}];
