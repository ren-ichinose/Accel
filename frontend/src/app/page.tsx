import Image from 'next/image'
import Motion from '@/components/common/layout/motion/motion'
import LoginAndSignupButtons from './_components/loginAndSignupButtons/loginAndSignupButtons'
import styles from './root.module.css'

export default function Welcome() {
  return (
    <Motion>
      <main className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.container}>
            <h1 className={styles.title}>Accel</h1>
            <p className={styles.message}>
              インボイス制度に対応した請求書を
              <br />
              Web上で作成・発行できるサービスです。
            </p>
            <LoginAndSignupButtons />
          </div>
          <div className={styles.container}>
            <Image
              src="/images/welcome.png"
              alt="請求書を作成しているイラスト"
              width={1300}
              height={980}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </main>
    </Motion>
  )
}
