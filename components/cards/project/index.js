import Github from "../../../icons/Github"
import OpenLink from "../../../icons/misc/OpenLink"
import CalltoAction from "../../Layout/Buttons/CalltoAction"
import styles from "./style.module.css"

const ProjectCard = ({project}) => {
  return (
   <div className={styles.project_card + " " + styles.body + " project-background"}>
     <div className={styles.project_card_buttons}>
       <CalltoAction href={project.url} variant="primary" title="Ctrl + click to open in new tab"><span className={styles.repository_botton_text}>Visit</span><OpenLink width="15"/></CalltoAction>
       <CalltoAction href={project.repository} variant="secondary" title="Ctrl + click to open in new tab"><span className={styles.repository_botton_text}>source code</span><Github width="20"/></CalltoAction>
     </div>
     <style jsx>{`
        .project-background {
          background: url(${project.image});
          background-position: center;
          background-size: cover;
        }
     `}</style>
   </div>
  )
}

export default ProjectCard;
