'use client'

import styles from './input.module.css'

export default function Input({
  placeholder,
  inputId,
  width,
  height,
  marginBottom,
  register,
}: InputProps) {
  const inputStyles = {
    width,
    height,
    marginBottom,
  }

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      id={inputId}
      style={inputStyles}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(register && register(inputId))}
    />
  )
}

Input.defaultProps = {
  placeholder: '',
  width: '100%',
  height: '36px',
  marginBottom: '0',
  register: '',
}

interface InputProps {
  placeholder?: string
  inputId: string
  width?: string
  height?: string
  marginBottom?: string
  register?: any
}
