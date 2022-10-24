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
            <a target="_blank" title="Instagram" className={styles.Sidebar_link}><Instagram/></a>
          </Link>
          <Link href="https://github.com/suyious">
            <a target="_blank" title="Github" className={styles.Sidebar_link}><Github/></a>
          </Link>
          <Link href="https://linkedin.com/in/suyash1621/">
            <a target="_blank" title="LinkedIn" className={styles.Sidebar_link}><LinkedIn/></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Left;
