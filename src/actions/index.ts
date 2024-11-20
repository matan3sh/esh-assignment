import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api'

export const getDataBySearchTerm = async (
  searchTerm: string,
  entity: string
) => {
  const response = await axios.get(
    `${BASE_URL}/${entity}?search=${searchTerm.toLocaleLowerCase()}`
  )
  return response.data
}
