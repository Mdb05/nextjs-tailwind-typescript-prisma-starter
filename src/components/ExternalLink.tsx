import React, { FC } from 'react'
import cn from 'classnames'
type Props = {
  href: string
  text: string
  className?: string
}

const ExternalLink: FC<Props> = ({ href, text, className }) => (
  <a
    className={cn(
      className
        ? className
        : 'rounded-lg bg-white-secondary px-3 py-2 text-center capitalize text-black-secondary transition delay-100 ease-in-out hover:bg-black-secondary hover:text-white-secondary hover:underline dark:bg-black-secondary dark:text-white-secondary dark:hover:bg-white-secondary dark:hover:text-black-secondary'
    )}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {text}
  </a>
)

export default ExternalLink
