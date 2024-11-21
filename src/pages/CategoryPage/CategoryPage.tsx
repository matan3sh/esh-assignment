import { Table } from 'antd'
import { useParams } from 'react-router-dom'
import { useGetDataByCategory } from '../../hooks/useGetDataByCategory'
import { People } from '../../types'
import { capitalizeFirstLetter } from '../../utils'
import { StyledContainer } from './CategoryPage.styled'
import { columns } from './CategoryPage.utils'

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>()
  const {
    data: people,
    isLoading,
    error,
  } = useGetDataByCategory<People>(categoryName)

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!people || people.length === 0) return <p>No data available.</p>

    return <Table<People> columns={columns} dataSource={people} rowKey="key" />
  }

  return (
    <StyledContainer vertical justify="center" align="center" gap={16}>
      <h2>{capitalizeFirstLetter(categoryName || '')}</h2>
      {renderContent()}
    </StyledContainer>
  )
}

export default CategoryPage
