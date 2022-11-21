import type { NextPage } from 'next'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Test: NextPage = () => {
  const { data, error } = useSWR('/api/users', fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <main>
        <h1 className='text-3xl font-bold'>{data[0].name}</h1>
      </main>
    </div>
  )
}

export default Test
