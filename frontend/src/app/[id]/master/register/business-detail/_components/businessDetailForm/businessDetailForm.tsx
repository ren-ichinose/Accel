'use client'

import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import TextareaWithLabel from '@/components/common/molecules/textareaWithLabel/textareaWithLabel'
import MainFoot from '@/components/mainFoot/mainFoot'
import styles from './businessDetailForm.module.css'

export default function BusinessDetailForm() {
  return (
    <form className={styles.tmp}>
      {' '}
      <InputWithLabel
        title="管理名"
        inputId="name"
        placeholder="管理するための名前を入力してください"
        height="48px"
        marginBottom="32px"
      />
      <TextareaWithLabel title="事業者情報" textareaId="businessDetail" />
      <MainFoot cancelButtonOnClick={() => {}} />
    </form>
  )
}
