import type { ComponentPropsWithoutRef } from 'react';
import styles from './benefitCard.module.scss';

type BenefitCardProps = ComponentPropsWithoutRef<'li'>;

export function BenefitCard({ className, ...props }: BenefitCardProps) {
  return <li className={className ? `${styles.card} ${className}` : styles.card} {...props} />;
}
