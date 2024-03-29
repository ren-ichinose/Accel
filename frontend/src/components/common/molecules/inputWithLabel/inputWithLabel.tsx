import { UseFormRegister } from 'react-hook-form'
import Input from '../../atoms/input/input'
import styles from './inputWithLabel.module.css'

export default function InputWithLabel({
  title = '',
  inputId,
  placeholder = '',
  type = 'text',
  width = '100%',
  height = '36px',
  marginRight = '0',
  marginBottom = '0',
  register = undefined,
  textAlign = 'left',
}: InputWithLabelProps) {
  const labelStyles = {
    width,
    marginRight,
    marginBottom,
  }

  return (
    <div style={labelStyles}>
      <label className={styles.label} htmlFor={inputId}>
        {title}
      </label>
      <Input
        placeholder={placeholder}
        inputId={inputId}
        height={height}
        register={register}
        type={type}
        textAlign={textAlign}
      />
    </div>
  )
}

interface InputWithLabelProps {
  title?: string
  inputId: string
  placeholder?: string
  type?: string
  width?: string
  height?: string
  marginRight?: string
  marginBottom?: string
  register?: UseFormRegister<any>
  textAlign?: string
}
