import styles from "./styles.module.css"
import Link from "next/link"
import {useState} from "react"

const Navbar = () => {

  const [ nav_active, setNav_active ] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.wrapper}>
        <div onClick={() => setNav_active(!nav_active)} className={styles.hamburger}>
          <div className={styles.hamburger_loaf}></div>
          <div className={styles.hamburger_loaf}></div>
        </div>
        <div className={`${ styles.click_to_exit } ${ nav_active ? styles.active : "" }`} onClick={() => setNav_active(false)}/>
        <div className={`${ styles.nav_links } ${ nav_active ? styles.active : "" }`}>
          <Link href="/#projects"><div onClick={() => setNav_active(false)} className={styles.nav_link}>projects</div></Link>
          <Link href="/developer/"><div onClick={() => setNav_active(false)} className={styles.nav_link}>developer</div></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
