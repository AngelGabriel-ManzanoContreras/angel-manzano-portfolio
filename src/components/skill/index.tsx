import { ISkill } from "./Iskill";

import styles from './skill.module.css';

export default function index({ img, name } : ISkill) {
  return (
    <article className={ styles[`skill`] }>
      <figure className={ styles[`skill__icon`] }>
        <img
          src={ img } 
          alt={ name } 
          />
      </figure>

      <p className={ styles[`skill__title`] }>{ name }</p>
    </article>
  )
}
