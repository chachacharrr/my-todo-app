※ デプロイ先を Vercel から Firebase に移行しました。
https://todo-707b9.web.app/

## Todo App (CRUD 操作練習用)

この Todo アプリは、CRUD 操作を練習するために作成したアプリケーションです。
以下の機能があります。

### CRUD 機能

- **Create（作成）:**
  - 新規作成ボタンをクリックすると、新しい Todo アイテムを作成するためのページに移動します。
  - 入力フォームに Todo を入力し、追加ボタンを押すことで、新しい Todo アイテムをリストに追加できます。
- **Read（読み出し）:**
  - Todo アイテムをリスト形式で一覧表示します。
- **Update（更新）:**
  - Todo アイテムをダブルクリックすると、テキストを編集できます。
  - チェックボックスをクリックすることで、Todo アイテムの完了・未完了を切り替えることができます。
- **Delete（削除）:**

  - Todo アイテムのゴミ箱アイコンをクリックすると、Todo アイテムを削除できます。

### その他機能

- **ログイン/ログアアウト:**
  - Google アカウントによるログインが可能です。Google でログインした場合、Todo は CloudFirestore に保持されます。
  - ゲストログインも可能です。

### 技術スタック

- Next.js
- React
- TypeScript
- Tailwind CSS
- Firebase
