import styles from "./Buttons.module.css";
import Link from "next/link";

const CalltoAction = ({href, children, variant, pad=1.5, title=""}) => {

  const variants = {
    "primary": styles.primary,
    "secondary": styles.secondary
  }

  return (
    <div className={styles.calltoAction_main + " calltoAction_pad " + variants[variant]}>
      <Link href={href}>
        <a className={styles.calltoAction_link} title={title}>{children}</a>
      </Link>
      <style jsx>{`
        .calltoAction_pad{
          padding: 0.3em ${pad}em;
        }
      `}</style>
    </div>
  )
}

export default CalltoAction;
