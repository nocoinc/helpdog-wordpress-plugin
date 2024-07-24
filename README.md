# hd-wordpress-plugin

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


## 複数バージョンのテスト

WordPressのバージョンとPHPのバージョンの両方を考慮する必要がある。

- [WordPressのリリースバージョン](https://github.com/WordPress/wordpress-develop/tags)

PHPバージョンはWordPressのバージョンに依存している。

また、プラグインで利用できるReactなどのnpmパッケージのバージョンもWordPressのバージョンに依存している。

そのため、以下の順番で考える：

1. 対応したいWordPressバージョンの下限を決定する（一般的には最新から2,3マイナーバージョンほど対応する）
   - 例: `6.5`
1. 最新のWordPressバージョンを確認する
   - 例: `6.6.1`
1. 「WordPressバージョン下限」をつかってnpmパッケージを更新する
   - `npm run packages-update` と実行する
   - 詳細は `package.json` の `scripts.packages-update` を調整する
1. 「WordPressバージョン下限」と「「WordPressバージョン上限」について動作検証する
   - `.wp-env` の `core` を変更し、`npm run start:update` を実行する
1. `readme.txt`, `helpdog.php` のバージョン表記を修正する
   - `Requires at least`, `Tested up to`, `Requires PHP`
1. プラグイン自体のバージョンを更新する
   - `readme.txt` と `helpdog.php` の `Stable tag` を修正する
   - `package.json` の `version` バージョン表記を修正する
1. PRマージしたあと、tag を付与する

## i18n

TBD
