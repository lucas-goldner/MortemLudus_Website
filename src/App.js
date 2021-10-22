import { Download } from './components/Download'
import { Slideshow } from './components/Slideshow'

export const App = () => {
  return (
    <>
      <div style={{ position: 'absolute', top: 10, right: 40, fontSize: '13px' }}>
        {new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()}
      </div>
      <Slideshow />
      <Download />
    </>
  )
}
