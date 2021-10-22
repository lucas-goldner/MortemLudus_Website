import { Download } from './components/Download'
import { Slideshow } from './components/Slideshow'
import { oneTwoThree } from './util'

export const App = () => {
  const randomNumber = oneTwoThree()
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 30,
          right: 50,
          fontSize: '13px',
          color: randomNumber === 1 ? '#FBAEFB' : randomNumber === 2 ? '#a4de69' : '#03e9f4'
        }}>
        {new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()}
      </div>
      <Slideshow />
      <Download number={randomNumber} />
    </>
  )
}
