import nodemailer from "npm:nodemailer";

export class Gmailer {
  constructor(user, pass) {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // ポート587はSTARTTLSなのでfalse
      auth: {
        user,
        pass,
      },
    });
    this.from = user;
  }
  async mail(to, subject, body, htmlmode = false) {
    const opt = {
      from: this.from, // '"Server Bot" <abc@??.com>',
      to,
      subject,
    };
    if (htmlmode) {
      opt.html = body;
    } else {
      opt.text = body;
    }
    const info = await this.transporter.sendMail(opt);
    //console.log("Message sent:", info.messageId);
    return info.messageId;
  }
}
