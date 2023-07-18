import Image from "next/image"
import Github from "../../../icons/Github"
import OpenLink from "../../../icons/misc/OpenLink"
import CalltoAction from "../../Layout/Buttons/CalltoAction"
import styles from "./style.module.css"

const ProjectCard = ({project}) => {

  const imageStyles = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  }

  return (
   <div className={styles.project_card + " " + styles.body}>
      <Image 
        src={project.image}
        width={1920} height={1080}
        style={imageStyles}/>
     <div className={styles.project_card_buttons}>
       <CalltoAction href={project.url} variant="primary" title="Ctrl + click to open in new tab"><span className={styles.repository_botton_text}>Visit</span><OpenLink width="15"/></CalltoAction>
       <CalltoAction href={project.repository} variant="secondary" title="Ctrl + click to open in new tab"><span className={styles.repository_botton_text}>source code</span><Github width="20"/></CalltoAction>
     </div>
   </div>
  )
}

export default ProjectCard;
