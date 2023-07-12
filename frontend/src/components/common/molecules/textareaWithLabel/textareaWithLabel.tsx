import Textarea from '../../atoms/textarea/textarea'
import styles from './textareaWithLabel.module.css'

export default function TextareaWithLabel({
  title,
  textareaId,
  placeholder,
  width,
  height,
  marginRight,
  marginBottom,
  register,
}: TextareaWithLabelProps) {
  const labelStyles = {
    width,
    marginRight,
    marginBottom,
  }

  return (
    <div style={labelStyles}>
      <label className={styles.label} htmlFor={textareaId}>
        {title}
      </label>
      <Textarea
        placeholder={placeholder}
        textareaId={textareaId}
        height={height}
        marginBottom={marginBottom}
        register={register}
      />
    </div>
  )
}

TextareaWithLabel.defaultProps = {
  title: '',
  placeholder: '',
  width: '100%',
  height: '128px',
  marginRight: '0',
  marginBottom: '0',
  register: '',
}

interface TextareaWithLabelProps {
  title?: string
  textareaId: string
  placeholder?: string
  width?: string
  height?: string
  marginRight?: string
  marginBottom?: string
  register?: any
}
