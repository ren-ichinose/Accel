![ヘッダー画像](/docs/img/header/header.png)

<br />

## サービスのURL

トライアル機能を実装しましたので、登録せずにお試しいただくこともできます。

https://ren-app.jp/ 

<br />

## サービスへの想い

私は現在、企業様や教育機関様のモノの購入のお手伝いをする卸売業を営んでいます。  
このプロダクトは、自社の書類作成業務や経理・会計業務を、より快適に、より効率的にしたいという想いから生まれました。  
現在は請求書の作成・発行機能のみですが、段階的な機能追加を重ね、見積書・発注書・納品書などの取引書類の作成業務から、  
お金や取引の流れに関わる経理・会計業務までを一元管理できる、統合的なソリューションの実現を目指しています。

<br />

## アプリケーションのイメージ
![アプリケーションのイメージ](/docs/img/app-view/app-view_1.1.gif)

<br />

## 機能一覧
| トップ画面 |　ログイン画面 |
| ---- | ---- |
| ![Top画面](/docs/img/app-view/welcome_1.1.png) | ![ログイン画面](/docs/img/app-view/login_1.1.png) |
| 登録せずにサービスをお試しいただくためのトライアル機能を実装しました。 | ログインIDとパスワードでの認証機能を実装しました。 |

| 事業者選択画面 |　請求書作成画面 |
| ---- | ---- |
| ![事業者選択画面](/docs/img/app-view/select-business_1.1.png) | ![請求書作成画面](/docs/img/app-view/create-invoice_1.1.png) |
| 登録済みの複数の事業者の中から、請求書を作成したい事業者を選択する機能を実装しました。 | 請求書の作成機能・マスタデータの呼び出し機能・税率変更機能・税率別内訳の計算機能、合計金額の計算機能を実装しました。 |

| 請求書詳細画面 |　PDF出力画面 |
| ---- | ---- |
| ![請求書詳細画面](/docs/img/app-view/invoice-detail_1.1.png) | ![　PDF出力画面](/docs/img/app-view/print-invoice_1.1.png) |
| 請求書データの表示機能を実装しました。 | PDFでの請求書発行機能を実装しました。 |

| 登録するマスタの選択画面 |　マスタの登録画面 |
| ---- | ---- |
| ![請求書詳細画面](/docs/img/app-view/select-master_1.1.png) | ![　PDF出力画面](/docs/img/app-view/master-register-form_1.1.png) |
| 事業者情報と備考欄情報のマスタ登録機能を実装しました。 | マスタ情報の登録をすることで、請求書の作成時にデータを呼び出すことができます。 |

<br />

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

<br />

## システム構成図

![システム構成図](/docs/img/system-architecture/system-architecture_1.1.png)

<br />

## ER図

![ER図](/docs/img/entity-relationship-diagram/entity-relationship-diagram_1.6.png)

<br />

## 今後の展望

本プロダクトは4つのフェーズに分けて、段階的に開発を進めています。  
現在はフェーズ1として、請求書の作成・発行機能の開発をしています。  
将来的には書類作成業務から経理・会計業務までを一元管理できる、統合的なソリューションの実現を目指しています。  

- フェーズ1：新しい税制に対応した請求書を、Web上で作成・発行できるアプリケーションを開発する。
- フェーズ2：発注書・見積書・納品書を、Web上で作成・発行できる機能を追加する。
- フェーズ3：お金や取引に関するデータをWeb上で確認できる機能を追加する。
- フェーズ4：取引に関するデータを、会計ソフトに効率的に取り込める機能を追加する。