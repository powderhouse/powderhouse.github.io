module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7583eeac696dfd49105e534b92a61718'),
  },
});
