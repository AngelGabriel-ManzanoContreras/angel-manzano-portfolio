import styles from './Home.module.css';

import About from "@sections/about";
import Skills from "@sections/Skills";
import Experience from "@sections/experience";
import Education from "@sections/Education";
import Projects from "@sections/projects";
import Contact from "@sections/contact";

export default function index() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
