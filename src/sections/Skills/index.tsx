import { useEffect, useState } from 'react'

import { skills } from '@data/data';

import styles from './Skills.module.css'
import Skill from '@components/skill';

export default function Skills() {
  const [ category, setCategory ] = useState( '' );
  const [ skillsToDisplay, setSkillsToDisplay ] = useState( skills );

  const categoryStyleHandler = ( inputCategory: string ) => {
    return [
      styles[`skills-section__category`],
      category === inputCategory ? styles[`skills-section__category--selected`] : ''
    ].join(' ');
  }

  const handleCategory = ( inputCategory: string ) => {
    if ( category === inputCategory ) {
      // Clear the category if it's already set
      setCategory( '' );
      setSkillsToDisplay( skills );
    } else {
      setCategory( inputCategory );
      setSkillsToDisplay( skills.filter( skill => skill.category === inputCategory ) );
    }
  }

  useEffect( () => {
    handleCategory( 'technical' )
  }, [])

  return (
    <section className={ styles[`skills-section`] } id='skills'>
      <h2 className={ styles[`skills-section__title`] }>Skills</h2>

      <section className={ styles[`skills-section__categories`] }>
        <button 
          className={ categoryStyleHandler('technical') }
          onClick={ () => handleCategory('technical') }
          >Technical</button>
        <button 
          className={ categoryStyleHandler('professional') }
          onClick={ () => handleCategory('professional') }
          >Professional</button>
      </section>

      <section className={ styles[`skills-section__skill-list`] }>
        { skillsToDisplay.map( ( skill, index ) => ( <Skill key={ index } { ...skill}/> ) )
        }
      </section>
    </section>
  )
}