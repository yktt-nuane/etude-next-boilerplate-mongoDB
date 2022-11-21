import type { NextPage } from 'next'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Swrpage: NextPage = () => {
  const { data, error } = useSWR('http://localhost:3000/api/users', fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{data[0].name}</h1>
      </main>
    </div>
  )
}

export default Swrpage
