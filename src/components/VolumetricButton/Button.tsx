import styles from './Button.module.scss'

interface VolumetricButtonProps {
  label?: string
  onClick?: () => void
}

export default function VolumetricButton({ label = '', onClick }: VolumetricButtonProps) {
  return (
    <div className={styles.volumetric}>
      <button type="button" className={styles.btn} onClick={onClick}>
        {label}
      </button>
    </div>
  )
}
