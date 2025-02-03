import styles from './home.module.css';

import About from "@sections/about";
import Skills from "@sections/skills";
import Experience from "@sections/experience";
import Education from "@sections/education";
import Projects from "@sections/projects";
import Contact from "@sections/contact";

export default function Home() {
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
