import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import sistemaEscolarPython from '../../assets/sistema-escolar-capa.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sistemaEscolarPython}
          link="https://github.com/rafapatekoski/sistema-secretaria-escolar-streamlit"
          h3="Sistema Escolar"
          p="Streamlit App"
        />
      </div>
    </section>
  );
}

export default Projects;
