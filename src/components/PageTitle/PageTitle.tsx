import { ComponentProps } from 'react'
import cn from 'classnames'
import styles from './PageTitle.module.scss'

type TPageTitleProps = { text: string; isUpperCase?: boolean } & ComponentProps<'div'>

export const PageTitle = ({ text, isUpperCase = true, className, ...props }: TPageTitleProps) => {
  const titleText = isUpperCase ? text.toUpperCase() : text
  return (
    <div className={cn(styles.title, className)} {...props}>
      <span>{titleText}</span>
    </div>
  )
}
