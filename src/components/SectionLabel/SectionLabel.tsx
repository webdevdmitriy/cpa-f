import type { ComponentPropsWithoutRef } from 'react';
import styles from './sectionLabel.module.scss';

type SectionLabelProps = ComponentPropsWithoutRef<'p'>;

export function SectionLabel({ className, ...props }: SectionLabelProps) {
  return <p className={className ? `${styles.label} ${className}` : styles.label} {...props} />;
}
