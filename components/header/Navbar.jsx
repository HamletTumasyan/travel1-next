import Link from "next/link";
import styles from './Header.module.css';

export default function Navbar({navbar}) {
  return (
    <nav className={styles.navbar}>
        {
            navbar.map(elem => (
                <Link href={elem.route} key={elem.id}>{elem.title}</Link>
            ))
        }
    </nav>
  )
}
