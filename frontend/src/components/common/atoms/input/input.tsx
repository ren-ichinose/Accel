'use client'

import styles from './input.module.css'

export default function Input({
  placeholder = '',
  type = 'text',
  inputId,
  width = '100%',
  height = '36px',
  marginBottom = '0',
  register = '',
}: InputProps) {
  const inputStyles = {
    width,
    height,
    marginBottom,
  }

  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      id={inputId}
      style={inputStyles}
      autoComplete={type === 'password' ? 'current-password' : undefined}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(register && register(inputId))}
    />
  )
}

interface InputProps {
  placeholder?: string
  type?: string
  inputId: string
  width?: string
  height?: string
  marginBottom?: string
  register?: any
}
