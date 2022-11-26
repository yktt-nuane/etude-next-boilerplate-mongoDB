import type { NextPage } from 'next'
import Layout from '../components/templates/Layout/index'
import Button from '../components/atoms/Button'
import Link from 'next/link'
import Text from 'components/atoms/Text'

const Homepage: NextPage = () => {
  return (
    <Layout>
      <Text>
        <h1 className='text-3xl font-bold underline'>Hello World</h1>
      </Text>
      <Button variant='primary'>
        <Link href={`/testpage`}>
          <Text as='a' color='white' padding={0} variant='mediumLarge' fontSize={'15px'}>
            TestPage
          </Text>
        </Link>
      </Button>
    </Layout>
  )
}

export default Homepage
