# hd-form-embed-wordpress-plugin

## 環境構築

1. php@8.1, node@20 のインストール
2. wp-cli のインストール (https://wp-cli.org/)
3. `npm i` の実行

## ローカル開発

1. 以下のコマンドで、WordPress Docker コンテナを起動。

   ```console
   npm run start
   ```

2. http://localhost:18888/wp-admin/plugins.php にアクセス。

   WP ログイン情報は、 `admin/password`。

   ログインすると、開発中のプラグインがインストールされた状態になる。

## i18n

1. `npm run i18n:make-pot`
2. `cd languages && npm run i18n:make-json`
