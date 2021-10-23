import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare'
import { FaGlobeAfrica } from '@react-icons/all-files/fa/FaGlobeAfrica'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiMapPinFill } from '@react-icons/all-files/ri/RiMapPinFill'
import { useState } from 'react'
import styles from '../styles/Contactus.module.css'

const ContactUs = ({ number }) => {
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState(false)

  const addFeedback = async () => {
    if (name === '' || email === '' || subject === '' || message === '') {
      setError(true)
      setStatus('Currently deactivated')
    } else {
      //Send message to db
      //   await db
      //     .collection('contactus')
      //     .add({
      //       name,
      //       username,
      //       email,
      //       subject,
      //       message
      //     })
      //     .then(() => {
      //       setName('')
      //       setUsername('')
      //       setEmail('')
      //       setSubject('')
      //       setMessage('')
      //       setError(false)
      //       setStatus('Nachricht wurde versendet')
      //     })
    }
  }

  const contacts = [
    {
      icon: <FaGlobeAfrica className={styles.icon} />,
      info: (
        <p>
          office@carlos.at
          <br /> carlos.at
        </p>
      )
    },
    {
      icon: <RiMapPinFill className={styles.icon} />,
      info: (
        <p>
          Diesseits 210, 4973
          <br /> St. Martin im Innkreis
        </p>
      )
    }
  ]

  return (
    <section className={styles.container}>
      <div className={styles.firstCon}>
        <h3 className={styles.firstConTitle}>Follow us</h3>
        <div className={styles.socialIconsCon}>
          <RiInstagramFill
            onClick={() => {
              window.open('https://www.instagram.com/lucas__el__rey', '_blank').focus()
            }}
            className={styles.socialIcon}
          />
          <FaTwitterSquare
            onClick={() => {
              window.open('https://twitter.com/LucasGoldner', '_blank').focus()
            }}
            className={styles.socialIcon}
          />
        </div>
      </div>
      <div className={styles.secondCon}>
        <h3 className={styles.secondConTitle}>Contact us</h3>
        <input value={name} placeholder="Name" onInput={(text) => setName(text.target.value)} className={styles.input} />
        <input
          value={email}
          placeholder="Email"
          onInput={(text) => setEmail(text.target.value)}
          className={styles.input}
          inputMode="email"
        />
        <input value={subject} onInput={(text) => setSubject(text.target.value)} placeholder="Topic" className={styles.input} />
        <input value={message} onInput={(text) => setMessage(text.target.value)} placeholder="Your message" className={styles.input} />
        {status == '' ? <></> : <p className={error ? styles.error : styles.success}>{status}</p>}
        <button
          className={number === 1 ? styles.sendButtonPink : number === 2 ? styles.sendButtonGreen : styles.sendButtonBlue}
          onClick={() => addFeedback()}>
          SEND
        </button>
      </div>
    </section>
  )
}

export default ContactUs
