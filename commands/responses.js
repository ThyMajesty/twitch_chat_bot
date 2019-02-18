exports.responses = [{
    name: ['хохол', 'хохлы', 'hohol', 'hohlu', 'hohly'],
    argsCount: 2,
    command: function(command, args) {
        return `${command.charAt(0).toUpperCase() + command.slice(1)} у тебя в штанах мудила, уважай правила канала!`
    }
}, {
    name: ['privet', 'привет', 'прівет'],
    argsCount: 2,
    command: function(command, args) {
        return `${command.charAt(0).toUpperCase() + command.slice(1)} пострыжися ^_^`
    }
}, {
    name: ['приветик', 'пріветик', 'privetik'],
    argsCount: 2,
    command: function(command, args) {
        return `пукни блять в пакетік <3`
    }
}, {
    name: ['300', 'триста'],
    argsCount: 2,
    command: function(command, args) {
        return `от соу си у тракториста`
    }
}, {
    name: ['СУ'],
    argsCount: 2,
    command: function(command, args) {
        return `ГС`
    }
}, {
    name: ['ГС'],
    argsCount: 2,
    command: function(command, args) {
        return `СУ`
    }
}, {
    name: ['Deus', 'деус', ''],
    argsCount: 2,
    command: function(command, args) {
        return `Deus Vult!`
    }
}, {
    name: ['Ave', 'аве'],
    argsCount: 2,
    command: function(command, args) {
        return `Ave Maria!`
    }
}];