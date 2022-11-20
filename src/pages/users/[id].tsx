import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { User } from '../../interfaces'

type Props = {
  item?: User
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title='Error'>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return <Layout title={`${item ? item.name : 'User Detail'}`}>{item && <ListDetail item={item} />}</Layout>
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const response = await axios.get<User[]>('http://localhost:3000/api/users')
  const items = await response.data

  const paths = items.map((user) => ({
    params: { id: user.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const response = await axios.get<User[]>('http://localhost:3000/api/users')
    const items = await response.data

    const item = items.find((data) => data.id === id)
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
