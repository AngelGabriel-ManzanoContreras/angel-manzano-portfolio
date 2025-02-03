import { useNavigate } from 'react-router-dom';

import styles from './about.module.css';
import MainButton from '@components/main-button';

import myImage from '@assets/imgs/angel.webp';

export default function index() {
  const navigator = useNavigate()

  const goToContact = () => {
    navigator('/#contact');
  }

  const paragraph = `Computer Science Student | P-TECH (IBM) - 2nd Generation
  
  CS Student with hands-on experience in UX/UI Design, passionate about creating digital experiences that are both visually appealing and user-friendly. I am always looking for new challenges and opportunities to grow professionally.
  `;

  return (
    <section className={ styles[`about`] } id='about'>

      <article className={ styles[`about__article`]}>
        <h1 className={ styles[`about__title`] }>Angel Manzano</h1>
        <pre className={ styles[`about__description`] }>{ paragraph }</pre>
        <MainButton text="Contact me" onClick={ goToContact } />
      </article>
      
      <figure className={ styles[`about__image`] }>
        <img  src={myImage} alt="Angel Manzano" />
      </figure>

    </section>
  )
}
