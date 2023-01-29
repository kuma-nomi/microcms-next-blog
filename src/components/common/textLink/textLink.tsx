import classNames from 'classnames'
import Link from 'next/link'
import styles from './textLink.module.scss'

type Props = {
  className?: string
  href: string
  label: string
}

export const TextLink: React.FC<Props> = ({ className, href, label }) => {
  return (
    <p className={classNames(className, styles['text-link'])}>
      <Link href={href}>{label}</Link>
    </p>
  )
}
