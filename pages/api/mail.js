const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  try {
    await mail
      .send({
        to: 'hello@ahmadihsan.com',
        from: 'contact@ahmadihsan.com',
        subject: `${body.name} just submitted a contact form on your website`,
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      })
      .then(() => {
        res.status(200).json({ status: '200: Ok!' });
      });
  } catch (error) {
    console.log('Error while sending mail through Sendgrid', error);
    res.json(error);
    res.status(400).json({ status: '400: Failed to send mail' });
  }
};
