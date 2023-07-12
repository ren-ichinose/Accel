import styles from './textarea.module.css'

export default function Textarea({
  placeholder,
  textareaId,
  width,
  height,
  marginBottom,
  register,
}: TextareaProps) {
  const textareaStyles = {
    width,
    height,
    marginBottom,
  }

  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      id={textareaId}
      style={textareaStyles}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(register && register(textareaId))}
    />
  )
}

Textarea.defaultProps = {
  placeholder: '',
  width: '100%',
  height: '128px',
  marginBottom: '0',
  register: '',
}

interface TextareaProps {
  placeholder?: string
  textareaId: string
  width?: string
  height?: string
  marginBottom?: string
  register?: any
}
