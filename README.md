# React + TypeScript + Webpack5 + React Router

## プロジェクト前提

- できるだけ `ts` ファイルで構成する
- `dev` は `webpack` の `devServer` で立ち上げる
- `create-react-app` ではなく、 `webpack` でビルドする

---

## 構成

|                    |        |
| :----------------: | :----: |
|      Node.js       | 16.9.0 |
|        npm         | 7.21.1 |
|       React        | 17.0.2 |
|     TypeScript     | 4.5.5  |
|      webpack       | 5.66.0 |
|    webpack-cli     | 4.9.1  |
| webpack-dev-server | 4.7.3  |
|  react-router-dom  | 6.2.1  |

---

## コマンド

### ローカルで dev 実行

```bash
npm run dev
```

- `dist` を削除する
- `dev` 用にビルドする
- `webpack` の `devServer` で立ち上げる

### ローカルで prod 実行

```bash
npm start
```

- `dist` を削除する
- `prod` 用にビルドする
- `http-server` でローカルの HTTP サーバーをで立ち上げる

### prod 用のビルドをする

```bash
npm run build
```

- `dist` を削除する
- `prod` 用にビルドする
