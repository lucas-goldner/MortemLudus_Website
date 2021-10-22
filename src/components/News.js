import styles from '../styles/News.module.css'
import news from '../data/newsData.json'
import { NewsArticle } from './NewsArticle'

export const News = () => {
  return (
    <section className={styles.container}>
      <div className={styles.newsTitleRow}>
        <div className={styles.line} /> <h2>News</h2>
      </div>
      <div className={styles.newsContainer}>
        {news.map(({ title, desc, img }, key) => {
          return (
            <div>
              <NewsArticle key={key} title={title} descr={desc} img={img} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
