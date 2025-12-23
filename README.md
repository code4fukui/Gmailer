# Gmailer

Gmail sender by user and pass (app password)

## usage

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

## how to get pass

1. [Googleアカウント セキュリティ](https://myaccount.google.com/security)を開く
2. 2段階認証プロセスを開始する
3. [アプリパスワード](https://myaccount.google.com/apppasswords)を開く
4. アプリ名 Gmailer などと記述
5. アプリパスワードが発行される　"xxxx xxxx xxxx xxxx"
