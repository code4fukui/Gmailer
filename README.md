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

## how to get pass

- Googleアカウント、アカウントの管理
- セキュリティ
- 2段階認証をON
- [アプリパスワード](https://myaccount.google.com/apppasswords)を開く
- アプリ名 Gmailer などと記述
- アプリパスワードが発行される　"xxxx xxxx xxxx xxxx"
