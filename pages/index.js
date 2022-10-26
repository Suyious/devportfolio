import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftSidebar from "../components/Sidebar/Left";
import RightSidebar from "../components/Sidebar/Right";
import CalltoAction from "../components/Layout/Buttons/CalltoAction";
import Footer from "../components/Layout/Footer";
import LinkedIn from "../icons/LinkedIn";
import Instagram from "../icons/Instagram";
import Github from "../icons/Github";
import Link from "next/link"
import Mail from "../icons/Mail";
import Carousel from "../components/Layout/Carousel";
import projects from "../data/projects";
import {ProjectCard} from "../components/cards/project";

export default function Home() {

  return (
    <div className={styles.app}>

      <Head>
        <title>Suyash K. | Dev Portfolio</title>
        <meta name="description" content="Suyash Kr. Developer Portfolio" />
        <meta property="og:title" content="Suyash K. | Dev Portfolio | Web Developer"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://suyashk.netlify.app/thumbnail.jpg"/>
        <meta property="og:url" content="http://suyashk.netlify.app"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="Web Developer Portfolio showcasing works by Suyash K."/>
        <meta property="og:site_name" content="Suyash K. Dev Portfolio"/>
        <meta name="twitter:image:alt" content="Suyash K. | Dev Portfolio"/>
        <meta property="fb:app_id" content="suyashk" />
        <meta name="twitter:site" content="@suyashk"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Sidebars_main}>
        <LeftSidebar/>
        <RightSidebar/>
      </div>

      <div id="hero" className={styles.hero}>
        <div className={styles.hero_container}>
          <p className={styles.hero_subtext}>Hi, I&apos;m</p>
          <h1 className={styles.hero_bigtext}>Suyash K.</h1>
          <ul className={styles.hero_subtext_bottom}>
            <li>web developer</li><li>programmer</li><li>problem solver</li>
          </ul>
          <div className={styles.hero_calltoaction}>
            <CalltoAction variant="secondary" href="#projects" >more about my work</CalltoAction>
            <CalltoAction variant="secondary" href="/">more about me</CalltoAction>
          </div>
        </div>
      </div>

      <div id="projects" className={styles.section_main}>
        <div className={styles.section_container}>
          <h2 className={styles.container_title}>projects</h2>
          <li className={styles.container_text}>and here are some of my works</li>
          <Carousel elements={projects.map((project) => <ProjectCard project={project}/>)}/>
        </div>
      </div>

      <div id="skills" className={styles.section_main + " " + styles.section_main_skills}>
        <div className={styles.section_container}>
          <h2 className={styles.container_title}>skills</h2>
          <li className={styles.container_text}>and here are few skills i&apos;ve acquired</li>
        </div>
      </div>

      <Footer>
        <div className={styles.app_footer}>
          <h2 className={styles.app_footer_title}>contact me</h2>
          <div className={styles.app_footer_links}>
            <Link href="https://instagram.com/suy.yes/">
              <a target="_blank" title="Instagram" className={styles.app_footer_link}><Instagram/></a>
            </Link>
            <Link href="https://github.com/suyious">
              <a target="_blank" title="Github" className={styles.app_footer_link}><Github/></a>
            </Link>
            <Link href="https://linkedin.com/in/suyash1621/">
              <a target="_blank" title="LinkedIn" className={styles.app_footer_link}><LinkedIn/></a>
            </Link>
          </div>
          <CalltoAction variant="secondary" href="mailto:suyu162001@gmail.com" pad={3}><span className={styles.footer_calltoaction_text}>get in touch</span><Mail size={17}/></CalltoAction>
        </div>
      </Footer>

    </div>
  );
}
