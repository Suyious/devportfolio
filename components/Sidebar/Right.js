import styles from "./Sidebar.module.css";
import Link from "next/link";
import Mail from "../../icons/Mail";

const Left = () => {
    return (
      <div className={styles.Sidebar_main + " " + styles.right}>
        <div className={styles.Sidebar_wrapper}>
          <div className={styles.Sidebar_links}>
            <Link href="mailto:suyu162001@gmail.com">
              <a title="Email" className={styles.Sidebar_link}><Mail/></a>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Left;
