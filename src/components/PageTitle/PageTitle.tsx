import { ComponentProps } from 'react'
import styles from './PageTitle.module.scss'
import cn from 'classnames'

type TPageTitleProps = { text: string; isUpperCase?: boolean } & ComponentProps<'div'>

export const PageTitle = ({ text, isUpperCase = true, ...props }: TPageTitleProps) => {
  const titleText = isUpperCase ? text.toUpperCase() : text
  return (
    <div className={cn(styles.title, props.className)} {...props}>
      <span>{titleText}</span>
    </div>
  )
}
