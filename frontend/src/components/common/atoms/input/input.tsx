import styles from './input.module.css'

export default function Input({
  placeholder,
  inputId,
  width,
  height,
  marginBottom,
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
    />
  )
}

Input.defaultProps = {
  placeholder: '',
  width: '100%',
  height: '36px',
  marginBottom: '0',
}

interface InputProps {
  placeholder?: string
  inputId: string
  width?: string
  height?: string
  marginBottom?: string
}
