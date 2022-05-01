# 総人口推移アプリ

## 目的

ゆめみ社の「フロントエンドコーディング試験」の課題に取り組んだ記録のリポジトリ。
応募はしないがフロントエンドの素振りのため。
https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d

## Usage

アプリをローカルで動かす際には RESAS API の利用登録を行い、API キーを取得する必要がある。
https://opendata.resas-portal.go.jp/docs/api/v1/index.html

API キーを取得後、`.env.local` の `"YOUR API KEY"` の箇所を API キーに置き換える。

```env
VITE_RESAS_API_KEY="YOUR API KEY"
```

```bash
$ git clone https://github.com/ryokryok/population-app.git
$ cd population-app
# install dependencies
$ yarn
# replace your api key
$ mv .env.sample .env.local
# launch dev server
$ yarn dev
# production build
$ yarn build
# production preview
$ yarn preview
```

## API

RESAS-API
https://opendata.resas-portal.go.jp/docs/api/v1/index.html
