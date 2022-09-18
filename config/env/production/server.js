module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
    },
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'dfee1c43fb8d2e506ad627'),
        },
    },
})