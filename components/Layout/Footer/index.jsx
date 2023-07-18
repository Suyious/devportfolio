import styles from "./styles.module.css"

const Footer = ({children}) => {
  return (
    <div className={styles.footer_main}>{children}</div>
  )
}

export default Footer;
