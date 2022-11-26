import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import Separator from 'components/atoms/Separator'
import Box from 'components/layout/Box'
import Footer from 'components/organisms/Footer'

type LayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <header>
      <nav>
        <Link href='/'>Home</Link> | <Link href='/testpage'>Testpage</Link> |<Link href='/api/users'>Users API</Link>
      </nav>
    </header>
    {children}
    <Separator />
    <Box padding={3}>
      <Footer />
    </Box>
  </div>
)

export default Layout
