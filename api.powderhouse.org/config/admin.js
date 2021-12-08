module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c1f6c990878a512ec9f3eb8471adf12d'),
  },
});
