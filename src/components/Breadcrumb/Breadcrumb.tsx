import styled from '@emotion/styled'
import { Breadcrumb as AntBreadcrumb, Flex } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils'

const StyledBreadcrumb = styled(Flex)`
  margin: 12px 20px;

  li {
    span,
    a {
      font-size: 18px;
      color: #fff;

      &:hover {
        color: #dcdcdc;
      }
    }
  }

  .ant-breadcrumb-separator {
    font-size: 18px;
    color: #fff;
  }
`

const Breadcrumb = () => {
  const { categoryName } = useParams<{ categoryName: string | undefined }>()

  return (
    <StyledBreadcrumb align="center" gap={16}>
      {categoryName && (
        <AntBreadcrumb>
          <AntBreadcrumb.Item>
            <Link to="/">Home</Link>
          </AntBreadcrumb.Item>

          <AntBreadcrumb.Item>
            {capitalizeFirstLetter(categoryName)}
          </AntBreadcrumb.Item>
        </AntBreadcrumb>
      )}
    </StyledBreadcrumb>
  )
}

export default Breadcrumb
