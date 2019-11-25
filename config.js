module.exports =
{
    "dev": {
        env: 'dev',
        port: process.env.PORT || 8008,
        appName: 'vibrant',
        secret: 'devontherocks',
        dbString: 'mongodb://127.0.0.1:27017/db',

    },
    "qa": {
        env: 'qa',
        port: 8009,
        appName: 'vibrant',
        secret: 'devontherocks',
        dbString: 'mongodb://138.197.17.216:31426/db',
    },
    "prd": {
        env: 'prd',
        port: 80,
        appName: 'vibrant',
        secret: '0.515036214X',
        dbString: 'mongodb://138.197.17.216:31415/db',
    }
}
