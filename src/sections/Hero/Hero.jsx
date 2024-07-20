import styles from './HeroStyles.module.css';
import profileImg from '../../assets/joaorafaelprofile3.png'
import downArrowImg from '../../assets/down-arrow.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/insta-light.svg';
import instaDark from '../../assets/insta.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instaIcon = theme === 'light' ? instaLight : instaDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profileImg}
          className={`${styles.hero} ${styles.profile}`}
          alt="Foto de Perfil de João Rafael"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          João
          <br />
          Rafael
        </h1>
        <h2>Desenvolvedor de Software</h2>
        <span>
          <a href="https://www.instagram.com/rafapatekoski/" target="_blank">
            <img src={instaIcon} alt="insta icon" />
          </a>
          <a href="https://github.com/rafapatekoski" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Apaixonado por Data Science com conhecimento em ferramentas frontend e backend que transformam dados em insights valiosos
        </p>
        <a href={CV} download>
          <button className="hover">Currículo</button>
        </a>
        <a href="#skills">
        <img className={styles.downArrowImg} src={downArrowImg} alt="down ARROW" />
      </a>
        
      </div>
    </section>
  );
}

export default Hero;
