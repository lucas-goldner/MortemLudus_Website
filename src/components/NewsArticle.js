import styles from '../styles/Newsarticle.module.css'

export const NewsArticle = ({ title, descr, img }) => {
  return (
    <article className={styles.articleCon}>
      <img className={styles.img} src={img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.descr}>{descr}</p>
    </article>
  )
}
