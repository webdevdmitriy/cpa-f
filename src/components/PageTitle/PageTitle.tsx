import { ComponentProps } from 'react';
import styles from './PageTitle.module.scss';
import cn from 'classnames';

type TPageTitleProps = { text: string; isUpperCase?: boolean } & ComponentProps<'div'>;

export const PageTitle = ({ text, isUpperCase = true, ...props }: TPageTitleProps) => {
  return (
    <div className={cn(styles.title, props.className)} {...props}>
      <span>{isUpperCase ? text.toUpperCase() : text}</span>
    </div>
  );
};
