# Wensday ホームページ

中国語・日本語の教師／通訳／台湾向け日本紹介ブログ・YouTube「Wensday」の公式サイトです。
日本語・繁體中文の切り替えに対応した、1ページの静的サイトです。

## ファイル構成
- `index.html` … ページ本体（日本語の文言はここに直接記載）
- `main.js` … 言語切り替え・メニュー・お問い合わせフォーム（繁體中文の文言はここ）
- `config.js` … **送信先メール・フォームURL・SNSリンクの設定**
- `style.css` … デザイン

## お問い合わせフォームを使えるようにする
`config.js` を編集します。

1. **おすすめ：Formspree（無料）**
   1. https://formspree.io に登録し、新しいフォームを作成
   2. 発行されたURL（`https://formspree.io/f/xxxxxxx`）を `formEndpoint` に貼り付け
   3. 送信内容が登録したメールアドレスに届きます
2. **簡易版**：`formEndpoint` を空のままにし、`contactEmail` に受信用アドレスを入力
   → 送信ボタンで訪問者のメールアプリが開きます

## 公開（GitHub Pages）
リポジトリの Settings → Pages → Branch に公開したいブランチ（例: `main`）と `/ (root)` を選んで保存すると、
`https://<ユーザー名>.github.io/wenwebsite/` で公開されます。

## 中国語ページを直接開く
`?lang=zh` を付けると繁體中文で表示されます（例: `index.html?lang=zh`）。
