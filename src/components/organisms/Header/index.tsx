import Link from 'next/link'
import styled from 'styled-components'
import AppLogo from 'components/atoms/AppLogo'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'

// ヘッダーのルート
const HeaderRoot = styled.header`
  height: 88px;
  padding: ${({ theme }) => theme.space[2]} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

// ナビゲーション
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`

// ナビゲーションのリンク
const NavLink = styled.span`
  display: inline;
`

// アンカー
const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

/**
 * ヘッダー
 */
const Header = () => {
  return (
    <HeaderRoot>
      <Flex paddingLeft={3} paddingRight={3} justifyContent='space-between'>
        <Nav as='nav' height='56px' alignItems='center'>
          <NavLink>
            <Link href='/' passHref>
              <Anchor as='a'>
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  )
}

export default Header
