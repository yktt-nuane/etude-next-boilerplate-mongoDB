import Layout from '../components/Layout'
import { Button } from '../components/atom/Button/Button'

const Homepage = () => (
  <Layout title='Home'>
    <h1 className='text-3xl font-bold underline'>Hello World</h1>
    <Button outlined={false} size={'small'} onClick={() => (document.location.href = 'https://reactjs.org')}>
      Button
    </Button>
  </Layout>
)

export default Homepage
