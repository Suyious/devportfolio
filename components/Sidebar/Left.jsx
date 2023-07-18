import styles from "./Sidebar.module.css";
import Link from "next/link";
import Instagram from "../../icons/Instagram";
import Github from "../../icons/Github";
import LinkedIn from "../../icons/LinkedIn";

const Left = () => {
  return (
    <div className={styles.Sidebar_main + " " + styles.left}>
      <div className={styles.Sidebar_wrapper}>
        <div className={styles.Sidebar_links}>
          <Link href="https://instagram.com/suy.yes/">
            <div target="_blank" title="Instagram" className={styles.Sidebar_link}><Instagram/></div>
          </Link>
          <Link href="https://github.com/suyious">
            <div target="_blank" title="Github" className={styles.Sidebar_link}><Github/></div>
          </Link>
          <Link href="https://linkedin.com/in/suyious/">
            <div target="_blank" title="LinkedIn" className={styles.Sidebar_link}><LinkedIn/></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Left;
