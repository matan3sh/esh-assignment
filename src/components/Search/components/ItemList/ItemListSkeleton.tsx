import styled from '@emotion/styled'
import { Flex, Skeleton } from 'antd'

const StyledSkeletonContainer = styled(Flex)`
  margin: 0 12px 12px 12px;
`

const ItemListSkeleton = () => {
  return (
    <StyledSkeletonContainer vertical gap={12}>
      {[...Array(3)].map((_, index) => (
        <Skeleton.Input
          active
          size={'small'}
          key={index}
          style={{ width: '100%' }}
        />
      ))}
    </StyledSkeletonContainer>
  )
}

export default ItemListSkeleton
