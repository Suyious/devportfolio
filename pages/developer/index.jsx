import Head from "next/head";
import styles from "./style.module.css"
import Image from "next/image";
import Link from "next/link";
import Github from "../../icons/Github";
import LinkedIn from "../../icons/LinkedIn";

const DeveloperPage = () => {
   return (
    <div className={`${styles.developer_body} ${styles.developer_container}`}> 
      <Head>
        <title>About | Suyash K. | Developer </title>
        <meta name="description" content="About Page | Suyash Kr. Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="Suyash K. | Dev Portfolio | Web Developer"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/OG-IMAGE.jpg"/>
        <meta property="og:url" content="https://suyashk.vercel.app"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="Web Developer Portfolio showcasing works by Suyash K."/>
        <meta property="og:site_name" content="Suyash K. Dev Portfolio"/>
        <meta name="twitter:image:alt" content="Suyash K. | Dev Portfolio"/>
        <meta property="fb:app_id" content="suyashk" />
        <meta name="twitter:site" content="@suyashk"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.developer_main}>
         <header className={styles.developer_header}>
            <div className={styles.developer_header_left}>
               <div className={styles.developer_header_left_links}>
                  <Github/>
                  <Link href="https://github.com/suyious">@Suyious</Link>
                  <LinkedIn/>
                  <Link href="https://linkedin.com/in/suyious">@Suyious</Link>
               </div>
               <h1 className={styles.developer_title_name}>Suyash Kumar</h1>
               <h3 className={styles.developer_title_subtitle}>Web Developer specializing in React</h3>
            </div>
            <div className={styles.developer_header_right}>
               <div className={styles.developer_header_image_container}>
                  <Image width="400" height="400"
                     src="https://avatars.githubusercontent.com/u/65485258?v=4"
                     style={{ width: "100%", height: "100%", transform: "rotate(-90deg)", display: "block"}}/>
               </div>
            </div>
         </header>

         <p className={styles.developer_description}>Motivated and skilled <b>web developer</b>, specializing in frontend development in <b>React</b> with a strong interest in <b>UI/UX design</b>. Seeking an entry-level position to kickstart my career and contribute to the development of innovative web applications. Eager to learn and grow within a dynamic and collaborative team environment.</p>
      </main>
    </div>
   )
}

export default DeveloperPage;