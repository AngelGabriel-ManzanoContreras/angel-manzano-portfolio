import { useNavigate } from 'react-router-dom';

import { IProjectCard } from './Iproject-card'

import styles from './project-card.module.css'
import MainButton from '@/components/main-button'

export default function index({ url, title, fragment, jobrole, img } : IProjectCard) {
  const navigateTo = useNavigate()

  const navigate = () => {
    navigateTo(`/${url}`)
  }
  
  return (
    <article className={ styles[`project-card`] }>

      <figure className={ styles[`project-card__image`] }>
        <img
          src={img} 
          alt={title} 
        />
      </figure>

      <section className={ styles[`project-card__summary`] }>
        <h3 className={ styles[`project-card__title`] }>{ title }</h3>
        <h4 className={ styles[`project-card__jobrole`] }>{ jobrole }</h4>
        <p>{ fragment }</p>

      </section>

      <MainButton
        onClick={ navigate }
        text="View project"
      />

    </article>
  )
}
