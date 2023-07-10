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
}

interface TextareaWithLabelProps {
  title?: string
  textareaId: string
  placeholder?: string
  width?: string
  height?: string
  marginRight?: string
  marginBottom?: string
}
