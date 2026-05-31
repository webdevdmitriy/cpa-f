import styles from './Button.module.scss'

interface VolumetricButtonProps {
  label?: string
}

export default function VolumetricButton({ label = '' }: VolumetricButtonProps) {
  return (
    <div className={styles.volumetric}>
      <button type="button" className={styles.btn}>
        {label}
      </button>
    </div>
  )
}
