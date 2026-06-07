import type { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'
import styles from './BenefitCard.module.scss'

type BenefitCardProps = ComponentPropsWithoutRef<'li'>

export function BenefitCard({ className, ...props }: BenefitCardProps) {
  return <li className={cn(styles.card, className)} {...props} />
}
