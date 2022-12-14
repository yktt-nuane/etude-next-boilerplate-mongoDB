import styled from 'styled-components'
import { DateTime } from 'components/DateTime'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'

interface ArticleCardProps {
  /**
   * 記事タイトル
   */
  title: string
  /**
   * 記事タイトル
   */
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  tag_name: any
  /**
   * 記事タイトル
   */
  updatedAt: string
  /**
   * バリアント（表示スタイル）
   */
  variant?: 'listing' | 'small' | 'detail'
}

// 記事カードのコンテナ
const ArticleCardContainer = styled.div`
  position: relative;
`

/**
 * 記事カード
 */
const ArticleCard = ({ title, tag_name, updatedAt, variant = 'listing' }: ArticleCardProps) => {
  return (
    <ArticleCardContainer>
      {variant !== 'small' && (
        <Box marginTop={1}>
          <Text as='h2' variant='large' margin={0} padding={2}>
            {title}
          </Text>
          <Text as='span' variant='medium' margin={0} padding={0}>
            <DateTime datetime={updatedAt} />
            {tag_name}
          </Text>
        </Box>
      )}
      {variant === 'small' && (
        <Box marginTop={1} backgroundColor='#d6e8fd'>
          <Text as='h4' variant='medium' padding={1} width={'160px'} height={'80px'} fontSize={'13px'}>
            {title}
            <DateTime datetime={updatedAt} />
          </Text>
        </Box>
      )}
    </ArticleCardContainer>
  )
}

export default ArticleCard
