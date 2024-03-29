import styles from './button.module.css'

export default function Button({
  className = 'default',
  type,
  text,
  onClick,
}: ButtonProps) {
  switch (type) {
    case 'submit':
      return (
        <button
          className={`${styles.button} ${styles[className]}`}
          type="submit"
          onClick={onClick || undefined}
        >
          {text}
        </button>
      )
    default:
      return (
        <button
          className={`${styles.button} ${styles[className]}`}
          type="button"
          onClick={onClick || undefined}
        >
          {text}
        </button>
      )
  }
}

interface ButtonProps {
  className?:
    | 'button'
    | 'default'
    | 'welcomeLogin'
    | 'welcomeSignup'
    | 'mainFootSubmit'
    | 'mainFootCancel'
    | 'authSubmid'
    | 'mainFootPrintInvoice'
  type: 'submit' | 'button'
  text: string
  onClick?: () => void
}
