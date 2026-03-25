import nodemailer from "npm:nodemailer";
import { MIME_TYPE } from "https://code4fukui.github.io/MIMEType/MIME_TYPE.js";
import { EXT } from "https://code4fukui.github.io/EXT/EXT.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

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
  async mail(to, subject, body, htmlmode = false, rawmode = false) {
    const opt = {
      from: this.from,
      to,
      subject,
    };
    if (rawmode) {
      opt.raw = body;
    } else if (htmlmode) {
      opt.html = body;
    } else {
      opt.text = body;
    }
    const info = await this.transporter.sendMail(opt);
    //console.log("Message sent:", info.messageId);
    return info.messageId;
  }
  async mailRaw(to, raw) {
    const opt = {
      from: this.from,
      to,
    };
    opt.raw = raw;
    const info = await this.transporter.sendMail(opt);
    //console.log("Message sent:", info.messageId);
    return info.messageId;
  }
  async mailHTML(to, subject, body, contents = {}) { // contents = { fn: bin }
    const boundary = "b" + Math.random();
    //const boundary = "boundary123";
    const body2 = `Subject: ${subject}
To: ${to}
From: ${this.from}
MIME-Version: 1.0
Content-Type: multipart/related; boundary="${boundary}"

--${boundary}
Content-Type: text/html; charset="UTF-8"

${body}`;
    const c = [body2];
    for (const fn in contents) {
      const bin = contents[fn];
      const ext = EXT.get(fn);
      const mime = MIME_TYPE[ext] || "octet-stream";
      const part = `--${boundary}
Content-Type: ${mime}
Content-Transfer-Encoding: base64
Content-ID: <${fn}>
Content-Disposition: inline

${Base64.encode(bin)}
`;
      c.push(part);
    }
    c.push("--" + boundary);
    const raw0 = c.join("\n");
    console.log(raw0);
    const raw = raw0;
    return await this.mailRaw(to, raw);
  }
}
