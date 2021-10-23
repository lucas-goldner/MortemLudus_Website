import styles from '../styles/Newsarticle.module.css'
import { useHistory } from 'react-router-dom'

export const NewsArticle = ({ title, descr, img }) => {
  const history = useHistory()
  return (
    <article className={styles.articleCon} onClick={() => history.push('/news')}>
      <img className={styles.img} src={img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.descr}>{descr}</p>
    </article>
  )
}
