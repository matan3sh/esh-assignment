import styled from '@emotion/styled'
import { Flex } from 'antd'

export const StyledContainer = styled(Flex)`
  .ant-pagination-item-link {
    svg {
      color: #fff;
    }
  }
  .ant-pagination-item-active {
    border-color: #fff;
    a {
      color: #485563;
    }
  }
`
