module.exports =
{
    "dev": {
        env: 'dev',
        port: process.env.PORT || 8008,
        appName: 'cricket',
        secret: 'devontherocks',
        dbString: 'mongodb://127.0.0.1:27017/cricket',

    },
    "qa": {
        env: 'qa',
        port: 8009,
        appName: 'cricket',
        secret: 'devontherocks',
        dbString: 'mongodb://138.197.17.216:31426/cricket',
    },
    "prd": {
        env: 'prd',
        port: 80,
        appName: 'cricket',
        secret: '0.515036214X',
        dbString: 'mongodb://138.197.17.216:31415/cricket',
    }
}
