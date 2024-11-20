import { useMemo } from 'react'
import { useGetDataBySearchTerm } from '../../../../hooks/useGetDataBySearchTerm'
import { Entity, Films, People, Starships } from '../../../../types'
import { capitalizeFirstLetter } from '../../../../utils'
import ItemList from '../ItemList/ItemList'
import { StyledAutoComplete } from './AutoComplete.styled'

interface AutoCompleteProps {
  searchTerm: string
}

const AutoComplete = ({ searchTerm }: AutoCompleteProps) => {
  const {
    data: people,
    isLoading: isLoadingPeople,
    error: errorPeople,
  } = useGetDataBySearchTerm<People>(searchTerm, Entity.People)
  const {
    data: films,
    isLoading: isLoadingFilms,
    error: errorFilms,
  } = useGetDataBySearchTerm<Films>(searchTerm, Entity.Films)
  const {
    data: starships,
    isLoading: isLoadingStarships,
    error: errorStarships,
  } = useGetDataBySearchTerm<Starships>(searchTerm, Entity.Starships)

  const hasData = useMemo(
    () => people.length > 0 || films.length > 0,
    [films.length, people.length]
  )

  return (
    <>
      {searchTerm && hasData && (
        <StyledAutoComplete>
          {people.length > 0 && (
            <ItemList<People>
              items={people}
              isLoading={isLoadingPeople}
              error={errorPeople}
              title={capitalizeFirstLetter(Entity.People)}
              renderItem={(person, index) => (
                <p key={`${index}-${person.name}-${person.birth_year}`}>
                  {person.name}
                </p>
              )}
            />
          )}
          {films.length > 0 && (
            <ItemList<Films>
              items={films}
              isLoading={isLoadingFilms}
              error={errorFilms}
              title={capitalizeFirstLetter(Entity.Films)}
              renderItem={(film, index) => (
                <p key={`${index}-${film.title}-${film.episode_id}`}>
                  {film.title}
                </p>
              )}
            />
          )}
          {starships.length > 0 && (
            <ItemList<Starships>
              items={starships}
              isLoading={isLoadingStarships}
              error={errorStarships}
              title={capitalizeFirstLetter(Entity.Starships)}
              renderItem={(starship, index) => (
                <p key={`${index}-${starship.name}-${starship.model}`}>
                  {starship.name}
                </p>
              )}
            />
          )}
        </StyledAutoComplete>
      )}
    </>
  )
}

export default AutoComplete
