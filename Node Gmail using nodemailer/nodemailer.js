var nodemailer = require('nodemailer'); //version :  nodemailer@4.6.8

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gauravtalele@gmail.com',
        pass: 'talele1234'
    }
});

var mailOptions = {
    from: 'gauravtalele@gmail.com',
    to: 'career.gyt@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Shree Swami Samartha  !'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});