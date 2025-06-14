require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });

module.exports = {
  PORT: process.env.PORT || 9000,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  OWNER_EMAIL: process.env.OWNER_EMAIL
};