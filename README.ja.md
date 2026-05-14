# Gmailer

Gmailのユーザー名とアプリパスワードを使用してメールを送信するツールです。

## 使い方

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

### コンテンツ付きHTML

```js
const res = await mailer.mailHTML(mail, title, html, { "test.jpg": binjpeg });
```

## アプリパスワードの取得方法

1. [Googleアカウントのセキュリティ](https://myaccount.google.com/security) を開く
2. 2段階認証プロセスを開始する
3. [アプリパスワード](https://myaccount.google.com/apppasswords) を開く
4. アプリ名（例: Gmailer）を入力する
5. アプリパスワードが生成される: "xxxx xxxx xxxx xxxx"

## ライセンス

MIT License
