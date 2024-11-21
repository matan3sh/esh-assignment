import { Alert, Spin, Table } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PersonModal from '../../components/PersonModal/PersonModal'
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

  const [people, setPeople] = useState<People[]>([])
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<People | null>(null)

  useEffect(() => {
    if (fetchedData) {
      setPeople(fetchedData)
    }
  }, [fetchedData])

  const updatePerson = useCallback(
    (editedPerson: People) => {
      setPeople((prev) =>
        prev.map((person) =>
          person.name === editedPerson.name ? editedPerson : person
        )
      )
    },
    [setPeople]
  )

  const deletePerson = useCallback(
    (personName: string) => {
      setPeople((prev) => prev.filter((person) => person.name !== personName))
    },
    [setPeople]
  )

  const openEditModal = (person: People) => {
    setIsEditModalOpen(true)
    setSelectedPerson(person)
  }

  const closeEditModal = (updatedPerson?: People) => {
    if (updatedPerson) {
      updatePerson(updatedPerson)
    }
    setSelectedPerson(null)
    setIsEditModalOpen(false)
  }

  const renderContent = () => {
    if (isLoading) return <Spin size="large" />
    if (error) return <Alert type="error" message={error} showIcon />
    if (people.length === 0) return <p>No data available.</p>

    return (
      <Table<People>
        columns={columns(deletePerson, openEditModal)}
        dataSource={people}
        rowKey="name"
      />
    )
  }

  return (
    <>
      <StyledContainer vertical justify="center" align="center" gap={16}>
        <h2>{capitalizeFirstLetter(categoryName || '')}</h2>
        {renderContent()}
      </StyledContainer>
      <PersonModal
        open={isEditModalOpen}
        handleClose={closeEditModal}
        person={selectedPerson}
      />
    </>
  )
}

export default CategoryPage
