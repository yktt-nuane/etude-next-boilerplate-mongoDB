import Layout from '../components/templates/Layout/index'
import Button from '../components/atoms/Button'

const Homepage = () => (
  <Layout title='Home'>
    <h1 className='text-3xl font-bold underline'>Hello World</h1>
    <Button variant='primary'>Button</Button>
  </Layout>
)

export default Homepage
