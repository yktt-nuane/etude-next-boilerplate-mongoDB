import axios from 'axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'
import List from '../../components/List'
import { User } from '../../interfaces'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title='Users List | Next.js + TypeScript Example'>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get<User[]>('http://localhost:3000/api/users')
  const items = await response.data

  return { props: { items } }
}

export default WithStaticProps
