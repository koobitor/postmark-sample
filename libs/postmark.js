require('dotenv').config();
const postmark = require('postmark');

const sendEmail = async body => {
  const { serverToken } = process.env;

  const client = new postmark.ServerClient(serverToken);

  const resp = await client
    .sendEmail(body, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    })
    .catch(err => err);

  return resp;
};

module.exports = {
  sendEmail
};
