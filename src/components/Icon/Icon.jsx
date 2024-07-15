import styles from './Icon.module.css'

export default function Icon({ link, name, img, displayTitle = false}) {
  return (
    <article className={styles.Icon}>
      
      <figure className={styles.Icon__Figure}>
        { 
          ( link )
          ? ( 
              <a href={link} target='_blank'>
                <img className={styles.Icon__Image} src={img} alt={name} />
              </a> 
            )
          : ( <img className={styles.Icon__Image} src={img} alt={name} /> )
        }
      </figure>

      { displayTitle && <p className={styles.Icon__Title}>{name}</p> }

    </article>
  )
}