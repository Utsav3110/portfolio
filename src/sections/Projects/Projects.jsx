import styles from './ProjectsStyles.module.css';
import videoVerse from './../../assets/videoVerse.png'
import ProjectCard from '../../common/ProjectCard';
import ClearPath from '../../assets/ClearPath.png'
import ForEver from './../../assets/FOREVER.png'
import chatHub from './../../assets/chatHub.png'


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
        <ProjectCard
          src={videoVerse}
          link="https://github.com/Utsav3110/VideoVerse/"
          h3="Video-Verse"
          p="Video Sharing Platform"
          code="https://github.com/Utsav3110/VideoVerse/"
          live="https://video-verse-client.vercel.app/"
        />
        <ProjectCard
          src={ForEver}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FOREVER"
          p="E-Commerce with admin pannel"
          code="https://github.com/Utsav3110/E-commerce"
          live="https://forever-client-virid.vercel.app/"
        />
          <ProjectCard
          src={chatHub}
          link="https://github.com/Utsav3110/ChatHub/"
          h3="ChatHub"
          p="chat-app using 
          socket.io"
          code="https://github.com/Utsav3110/ChatHub/"
          live=""
        />
        <ProjectCard 
          src={ClearPath}
          link="https://github.com/Utsav3110/ClearPath/"
          h3="ClearPath"
          p="provides a police free way"
          code="https://github.com/Utsav3110/ClearPath/"
          live=""
        />
        
        

        
      </div>
    </section>
  );
}

export default Projects;
