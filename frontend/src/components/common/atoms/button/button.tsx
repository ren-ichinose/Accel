import styles from './button.module.css'

export default function Button({
  className = 'button',
  type,
  text,
}: ButtonProps) {
  switch (type) {
    case 'submit':
      return (
        <button
          className={`${styles.button} ${styles[className]}`}
          type="submit"
        >
          {text}
        </button>
      )
    default:
      return (
        <button
          className={`${styles.button} ${styles[className]}`}
          type="button"
        >
          {text}
        </button>
      )
  }
}

interface ButtonProps {
  className?: 'button' | 'mainFootSubmit' | 'mainFootCancel' | 'authSubmid'
  type: 'submit' | 'button'
  text: string
}
