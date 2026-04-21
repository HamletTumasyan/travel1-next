import Link from 'next/link'
import styles from './Header.module.css';

export default function Logo({logo}) {
  return (
    <Link href={'/'} className={styles.logo}>
        <img src={logo.image} alt="Logo" />
    </Link>
  )
}
