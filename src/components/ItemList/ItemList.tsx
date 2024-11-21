import { RightOutlined } from '@ant-design/icons'
import { Alert, Divider, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils'
import {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryTitle,
  StyledViewAll,
} from './ItemList.styled'
import ItemListSkeleton from './ItemListSkeleton'

interface ItemListProps<T> {
  items: T[]
  isLoading: boolean
  error: string | null
  renderItem: (item: T, index: number) => React.ReactNode
  entity: string
  itemsToShow?: number
}

const ItemList = <T,>({
  items,
  isLoading,
  error,
  renderItem,
  entity,
  itemsToShow = 3,
}: ItemListProps<T>) => {
  const renderContent = () => {
    if (isLoading) return <ItemListSkeleton />
    if (error) return <Alert type="error" banner message={error} showIcon />

    return (
      <>
        <Flex vertical>
          {items
            .slice(0, itemsToShow)
            .map((item, index) => renderItem(item, index))}
        </Flex>
      </>
    )
  }

  return (
    <Flex vertical gap={2}>
      <StyledCategoryHeader align="center" justify="space-between">
        <StyledCategory align="center">
          <RightOutlined />
          <StyledCategoryTitle>
            {capitalizeFirstLetter(entity)}
          </StyledCategoryTitle>
        </StyledCategory>
        {items.length > itemsToShow && (
          <StyledViewAll>
            <Link to={`category/${entity}`}>View All</Link>
          </StyledViewAll>
        )}
      </StyledCategoryHeader>
      <Divider />
      {renderContent()}
    </Flex>
  )
}

export default ItemList
