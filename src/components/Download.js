import styles from '../styles/Download.module.css'
import { useEffect } from 'react'

export const Download = ({ number }) => {
  useEffect(() => {
    let parent = document.querySelectorAll('.animate-text')
    for (let i = 0; i < parent.length; i++) {
      parent[i].style.width = parent[i].children[0].clientWidth + 'px'
    }
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.backgroundText}>
        <div className={styles.animateText}>
          <span className={number === 1 ? styles.spansTextPink : number === 2 ? styles.spansTextGreen : styles.spansTextBlue}>
            Mortem Ludus&nbsp;
          </span>
          <span className={number === 1 ? styles.spansTextPink : number === 2 ? styles.spansTextGreen : styles.spansTextBlue}>
            Mortem Ludus&nbsp;
          </span>
        </div>
        <div className={styles.animateText}>
          <span className={number === 1 ? styles.spansTextPink : number === 2 ? styles.spansTextGreen : styles.spansTextBlue}>
            Mortem Ludus&nbsp;
          </span>
          <span className={number === 1 ? styles.spansTextPink : number === 2 ? styles.spansTextGreen : styles.spansTextBlue}>
            Mortem Ludus&nbsp;
          </span>
        </div>
      </div>
      <img className={styles.logo} src={'/mortem_ludus_logo.png'} />
      <a className={styles.dlButton} href="https://drive.google.com/file/d/1Rc_AT3cgkONq-jj5Skyj1CknmAFAgTNZ/view?usp=sharing">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Download Alpha 0.1
      </a>
    </section>
  )
}
