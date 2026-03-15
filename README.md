# Gmailer

Gmail sender by user and pass (app password)

## Usage

```js
import { Gmailer } from "https://code4fukui.github.io/Gmailer/Gmailer.js";

const user = "xx@gmail.com";
const pass = "xxxx xxx"; // ←アプリパスワード

const mailer = new Gmailer(user, pass);

const mail = "fukuno@jig.jp";
const title = "test title";
const body = "ボディ";
const res = await mailer.mail(mail, title, body);
console.log(res);
```

## How to Get Pass

1. Open [Google Account Security](https://myaccount.google.com/security)
2. Start the two-step verification process
3. Open [App Passwords](https://myaccount.google.com/apppasswords)
4. Enter the app name, e.g., Gmailer
5. An app password will be generated: "xxxx xxxx xxxx xxxx"

## License

MIT License