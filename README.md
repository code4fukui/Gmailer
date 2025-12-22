# Gmailer

Gmail sender by user and pass (app password)

## usage

```js
import { Gmailer } from "./Gmailer.js";

const user = "xx@gmail.com";
const pass = "xxxx xxx"; // ←アプリパスワード

const mailer = new Gmailer(user, pass);

const mail = "fukuno@jig.jp";
const title = "test title";
const body = "ボディ";
const res = await mailer.mail(mail, title, body);
console.log(res);
```
