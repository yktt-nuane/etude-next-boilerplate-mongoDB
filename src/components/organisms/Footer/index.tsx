import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

/**
 * フッター
 */
const Footer = () => {
  return (
    <footer>
      <Flex paddingLeft={3} paddingRight={3} justifyContent='space-between'>
        <Box marginBottom={2}>
          <nav>
            <Box>
              <Text>Footer</Text>
            </Box>
          </nav>
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
