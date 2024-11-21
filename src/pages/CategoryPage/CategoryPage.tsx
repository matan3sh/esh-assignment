import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetDataByCategory } from '../../hooks/useGetDataByCategory'
import { People } from '../../types'
import { capitalizeFirstLetter } from '../../utils'
import { StyledContainer } from './CategoryPage.styled'
import { columns } from './CategoryPage.utils'

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>()
  const {
    data: fetchedData,
    isLoading,
    error,
  } = useGetDataByCategory<People>(categoryName)

  // Display only people data
  const [people, setPeople] = useState<People[]>([])

  useEffect(() => {
    if (fetchedData) {
      setPeople(fetchedData)
    }
  }, [fetchedData])

  const handleEdit = (name: string) => {
    console.log(`Edit row with key: ${name}`)
  }

  const handleDelete = (name: string) => {
    setPeople((prev) => prev.filter((person) => person.name !== name))
  }

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (people.length === 0) return <p>No data available.</p>

    return (
      <Table<People>
        columns={columns(handleEdit, handleDelete)}
        dataSource={people}
      />
    )
  }

  return (
    <StyledContainer vertical justify="center" align="center" gap={16}>
      <h2>{capitalizeFirstLetter(categoryName || '')}</h2>
      {renderContent()}
    </StyledContainer>
  )
}

export default CategoryPage
