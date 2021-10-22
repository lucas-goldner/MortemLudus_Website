import styles from '../styles/Newsarticle.module.css'

export const NewsArticle = ({ title, descr, img }) => {
  return (
    <article>
      <img src={img} />
      <h3>{title}</h3>
      <p>{descr}</p>
    </article>
  )
}
