# Gmailer

Gmailを使ってメールを送信するためのツールです。

## 機能

- Gmailのユーザー名とアプリパスワードを使用してメールを送信できます。

## 必要環境

- Gmailアカウントと2段階認証の設定が必要です。

## 使い方

```js
import { Gmailer } from "https://code4fukui.github.io/Gmailer/Gmailer.js";

const user = "xx@gmail.com";
const pass = "xxxx xxxx"; // ←アプリパスワード

const mailer = new Gmailer(user, pass);

const to = "fukuno@jig.jp";
const title = "test title";
const body = "ボディ";
const res = await mailer.mail(to, title, body);
console.log(res);
```

### コンテンツ付きHTMLメールの送信方法

```js
const res = await mailer.mailHTML(mail, title, html, { "test.jpg": binjpeg });
```

## アプリパスワードの取得方法

1. [Googleアカウント セキュリティ](https://myaccount.google.com/security)を開く
2. 2段階認証プロセスを開始する
3. [アプリパスワード](https://myaccount.google.com/apppasswords)を開く
4. アプリ名（例: Gmailer）を入力する
5. アプリパスワードが発行されます。"xxxx xxxx xxxx xxxx"

## ライセンス

MIT License