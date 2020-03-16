const postmark = require('./libs/postmark');

const body = {
  From: 'info@medvine.com',
  To: 'sakol@medvine.com',
  Subject: 'Hello from Postmark!',
  HtmlBody: 'Hello message body.'
};

postmark.sendEmail(body);
