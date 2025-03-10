import { education } from '@data/data';

import styles from './Education.module.css';
import ExperienceCard from '@components/experience-card';

export default function index() {
  return (
    <section className={ styles[`education`] } id='education'>
      
      <h2 className={ styles[`education__title`] }>Education</h2>
      
      <section className={ styles[`education__list`] }>
        {
          education.map((cert, index) => ( 
            <ExperienceCard 
              key={ index } 
              { ...cert } 
            />) 
          )
        }
      </section>

    </section>
  )
}
