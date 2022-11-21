import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>Home</Link> | <Link href='/swrpage'>Swrpage</Link> |<Link href='/api/users'>Users API</Link>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
