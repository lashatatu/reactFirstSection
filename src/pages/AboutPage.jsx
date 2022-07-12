import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div className={'about'}>
        <h1>about page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eius error maxime molestias nostrum omnis?</p>

        <p>
          <Link to={'/'}>back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage