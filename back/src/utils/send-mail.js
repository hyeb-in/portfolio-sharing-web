import { nodemailer } from "nodemailer";
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "daechan476@gmail.com",
        pass: "adabvpsjxsnvfedh",
    },
});

const sendMail = (to, subject, text) =>
    new Promise((resolve, reject) => {
        const message = {
            to,
            subject,
            text,
        };

        transport.sendMail(message, (err, info) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(info);
        });
    });

export { sendMail };
