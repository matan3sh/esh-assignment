import { useCallback, useEffect, useState } from 'react'
import { getDataBySearchTerm } from '../actions'

export const useGetDataBySearchTerm = <T>(
  searchTerm: string,
  entity: string
) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = useCallback(
    async (term: string) => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await getDataBySearchTerm(term, entity)
        setData(data.results)
      } catch (err) {
        setError(`Failed to fetch ${entity}. Please try again later.`)
        console.error(`Error fetching ${entity}:`, err)
      } finally {
        setIsLoading(false)
      }
    },
    [entity]
  )

  useEffect(() => {
    if (searchTerm) {
      fetchData(searchTerm)
    } else {
      setData([])
    }
  }, [fetchData, searchTerm])

  return { data, isLoading, error }
}
