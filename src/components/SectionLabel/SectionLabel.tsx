import type { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'
import styles from './SectionLabel.module.scss'

type SectionLabelProps = ComponentPropsWithoutRef<'p'>

export function SectionLabel({ className, ...props }: SectionLabelProps) {
  return <p className={cn(styles.label, className)} {...props} />
}
