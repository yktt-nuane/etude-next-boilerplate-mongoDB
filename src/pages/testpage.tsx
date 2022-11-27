import type { NextPage } from 'next'
import useSWR from 'swr'
import Link from 'next/link'
import Text from 'components/atoms/Text'
import Button from '../components/atoms/Button'
import Layout from '../components/templates/Layout/index'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Test: NextPage = () => {
  const { data, error } = useSWR('/api/users', fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <div>
        <main>
          <h1 className='text-3xl font-bold'>name is: {data[0].name}</h1>
          <Button>
            <Link href={`/`}>
              <Text color={'white'}>TopPage</Text>
            </Link>
          </Button>
        </main>
      </div>
    </Layout>
  )
}

export default Test
