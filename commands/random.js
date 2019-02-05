exports.randomCommand = {
    name: '!random',
    argsCount: 2,
    command: function (args) {
        console.log('args', args, !args);
        let arg1 = args[0] || 0,
            arg2 = args[1] ? args[1] : args[0] ? 0 : 100;
        console.log(arg1, arg2);
        response = Math.floor(Math.random() * (Math.max(arg1, arg2) - Math.min(arg1, arg2) + 1)) + Math.min(arg1, arg2);
        return `${response}`
    }
};
