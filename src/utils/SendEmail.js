import nodemailer from "nodemailer";
export async function sendEmail(to,subject,html){
    const transporter= nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"aseelshaherjumaa2003@gmail.com",
            pass:"vvzm lqdg kxzd inxi",
        }
    });
    const info = await transporter.sendMail({
        from:'"Node 10 "<aseelshaherjumaa2003@gmail.com>',
        to,
        subject,
        html,
    });
}