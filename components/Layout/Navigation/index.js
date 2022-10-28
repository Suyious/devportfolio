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
          <Link href="#projects"><a onClick={() => setNav_active(false)} className={styles.nav_link}>projects</a></Link>
          <Link href="#developer"><a onClick={() => setNav_active(false)} className={styles.nav_link}>developer</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
