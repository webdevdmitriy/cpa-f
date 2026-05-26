import styles from './button.module.scss';

interface VolumetricButtonProps {
  label?: string;
}

export default function VolumetricButton({ label = '' }: VolumetricButtonProps) {
  return (
    <div className={styles.volumetric}>
      <button className={styles.btn}>{label}</button>
    </div>
  );
}
