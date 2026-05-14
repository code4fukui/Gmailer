# Gmailer

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Gmail sender that uses your Gmail username and app password.

## Usage

```js
import { Gmailer } from "https://code4fukui.github.io/Gmailer/Gmailer.js";

const user = "xx@gmail.com";
const pass = "xxxx xxx"; // ←App password

const mailer = new Gmailer(user, pass);

const mail = "fukuno@jig.jp";
const title = "test title";
const body = "Body";
const res = await mailer.mail(mail, title, body);
console.log(res);
```

### HTML with contents

```js
const res = await mailer.mailHTML(mail, title, html, { "test.jpg": binjpeg });
```

## How to Get App Password

1. Open [Google Account Security](https://myaccount.google.com/security)
2. Start the two-step verification process
3. Open [App Passwords](https://myaccount.google.com/apppasswords)
4. Enter the app name, e.g., Gmailer
5. An app password will be generated: "xxxx xxxx xxxx xxxx"

## License

MIT License