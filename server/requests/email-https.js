//Loading router module
const router = require('express').Router();
//Loading nodemailer
const nodemailer = require('nodemailer');

router.route('/send_query').post((req, res) => {
    const informationToSend = req.body; 

    const email = `
        <h1>You have a new query!</h1>
        <p>Name: ${informationToSend.name}</p>
        <p>Email: ${informationToSend.email}</p>
        <p>Telephone: ${informationToSend.telephone}</p>
        <p>Query:<br/>${informationToSend.query}</p>
    `;

    async function sendEmail(){
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            service: 'Outlook365',
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });

        const reqInfo = await transporter.sendMail({
            from: `<${process.env.email}>`,
            to: process.env.EMAIL,
            subject: "You've recieved a query!",
            html: email
        })
    }

    sendEmail()
        .catch(e => console.log(e));
});

module.exports = router;