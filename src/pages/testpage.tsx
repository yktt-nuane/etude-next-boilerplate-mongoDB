import type { NextPage } from 'next'
import useSWR from 'swr'
import Link from 'next/link'
import Text from 'components/atoms/Text'
import Button from '../components/atoms/Button'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Test: NextPage = () => {
  const { data, error } = useSWR('/api/users', fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <main>
        <h1 className='text-3xl font-bold'>{data[0].name}</h1>
        <Button variant='primary'>
          <Link href={`/`}>
            <Text as='a' color='white' padding={0} variant='mediumLarge' fontSize={'15px'}>
              TopPage
            </Text>
          </Link>
        </Button>
      </main>
    </div>
  )
}

export default Test
