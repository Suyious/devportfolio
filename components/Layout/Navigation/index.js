import styles from "./styles.module.css"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
          <div className={styles.wrapper}>
            <div className={styles.nav_links}>
              <Link href="#projects"><a className={styles.nav_link}>projects</a></Link>
              <Link href="#developer"><a className={styles.nav_link}>developer</a></Link>
            </div>
            <div className={styles.hamburger}>
              <div className={styles.hamburger_loaf}></div>
              <div className={styles.hamburger_loaf}></div>
            </div>
          </div>
        </div>
    )
}

export default Navbar
