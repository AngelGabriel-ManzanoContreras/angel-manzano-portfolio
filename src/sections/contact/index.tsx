import { profiles } from '@/data/data';

import styles from './contact.module.css';
import ContactIcon from '@/components/contact-icon';

export default function index() {
  return (
    <section id='contact' className={ styles[`contact`] }>

      <h2 className={ styles[`contact__title`] }>Contact</h2>

      <section className={ styles[`contact__list`] }>
        {
          profiles.map((profile, index) => (<ContactIcon key={index} { ...profile } />))
        }
      </section>

    </section>
  )
}
