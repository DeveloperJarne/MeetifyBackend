module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '771990751bb5261ac673fb49802bb8d6'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
