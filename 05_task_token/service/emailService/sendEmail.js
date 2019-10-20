const mailer = require('nodemailer');
const {email, password} = require('../../configs/emailData');

module.exports = async emailToUser => {

    const transport = mailer.createTransport({
        service: 'Gmail',
        auth: {
            user: email,
            pass: password
        }
    });

   await transport.sendMail({
        from: email,
        to: emailToUser,
        subject: 'TEST MESSAGE',
        html: 'HELLO FROM LUN! THANKS FOR USING US' 
    });
}