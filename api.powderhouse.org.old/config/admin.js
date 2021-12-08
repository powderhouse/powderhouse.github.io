module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7583eeac696dfd49105e534b92a61718'),
  },
  apiToken: {
    salt: "c581161f4926ba4f2a30d54722aba6f93a32fdc596b7f4468535daa124b00a95138a2e89d6f4b7c5d170b36f1647e34d6a52b7bc873fd7a94ef143a379a2ee3f"
  }
});
