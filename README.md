# Accel

![ヘッダー画像](/docs/img/header/header.png)

## サービスのURL

https://ren-app.jp/

## サービスへの想い

私は現在、企業様や教育機関様のモノの購入のお手伝いをする卸売業を営んでいます。  
このプロダクトは、自社の書類作成業務や経理・会計業務を、より快適に、より便利にしたいという想いから生まれました。  
現在は請求書の作成・発行機能のみですが、段階的な機能追加を重ね、見積書・発注書・納品書などの取引書類の作成業務から、  
お金や取引の流れに関わる経理・会計業務までを一元管理できる、統合的なソリューションの実現を目指しています。

## アプリケーションのイメージ
![アプリケーションのイメージ](/docs/img/app-view/app-view.gif)

## 機能一覧
| トップ画面 |　ログイン画面 |
| ---- | ---- |
| ![Top画面](/docs/img/app-view/welcome.png) | ![ログイン画面](/docs/img/app-view/login.png) |
| シンプルさと統一感を意識して画面を実装しました。 | ログインIDとパスワードでの認証機能を実装しました。 |

| 事業者選択画面 |　請求書作成画面 |
| ---- | ---- |
| ![事業者選択画面](/docs/img/app-view/select-business.png) | ![請求書作成画面](/docs/img/app-view/create-invoice.png) |
| 登録済みの複数の事業者の中から、請求書を作成したい事業者を選択する機能を実装しました。 | 請求書の作成機能・税率別内訳の計算機能、合計金額の計算機能を実装しました。 |

| 請求書詳細画面 |　PDF出力画面 |
| ---- | ---- |
| ![請求書詳細画面](/docs/img/app-view/invoice-detail.png) | ![　PDF出力画面](/docs/img/app-view/print-invoice.png) |
| 請求書データの表示機能を実装しました。 | PDFでの請求書発行機能を実装しました。 |


## 使用技術

| Category          | Technology Stack                                     |
| ----------------- | --------------------------------------------------   |
| Frontend          | TypeScript, Next.js, Storybook                       |
| Backend           | TypeScript, NestJS, Prisma                           |
| Infrastructure    | Amazon Web Services, Vercel                          |
| Database          | PostgreSQL                                           |
| Monitoring        | Sentry, UptimeRobot                                  |
| Environment setup | Docker                                               |
| CI/CD             | GitHub Actions                                       |
| Design            | Figma, Lucid                                         |
| etc.              | Stylelint, ESLint, Prettier, Husky Jest, Git, GitHub |

## システム構成図

![システム構成図](/docs/img/system-architecture/system-architecture.png)

## ER図

![ER図](/docs/img/entity-relationship-diagram/entity-relationship-diagram_1.5.png)

## 今後の展望

- 本プロダクトは4つのフェーズに分けて開発を進めています。
  - フェーズ1：新しい税制に対応した請求書を、Web上で作成・発行できるアプリケーションを開発する。
  - フェーズ2：発注書・見積書・納品書を、Web上で作成・発行できる機能を追加する。
  - フェーズ3：お金や取引に関するデータをWEB上で確認できる機能を追加する。
  - フェーズ4：取引に関するデータを、会計ソフトに効率的に取り込める機能を追加する。