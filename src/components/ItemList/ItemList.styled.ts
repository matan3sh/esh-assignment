import styled from '@emotion/styled'
import { Flex } from 'antd'

export const StyledCategory = styled(Flex)`
  padding: 0 0 0 12px;

  svg {
    font-size: 10px;
  }
`

export const StyledCategoryTitle = styled.h3`
  font-size: 14px;
  padding: 12px 0 12px 6px;
  font-weight: 600;
  cursor: default;
  color: #485563;
`

export const StyledViewAll = styled.span`
  font-size: 12px;
  color: #485563;
  cursor: pointer;
  margin: 0 12px 0 auto;
  font-weight: 600;
`
