import { useCallback, useEffect, useState } from 'react'
import { getDataByCategory } from '../actions'
import { Entity } from '../types'

export const useGetDataByCategory = <T>(category?: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = useCallback(async (category: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getDataByCategory(category)
      setData(data.results)
    } catch (err) {
      setError(`Failed to fetch ${category} items. Please try again later.`)
      console.error(`Error fetching ${category} items:`, err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (category && category === Entity.People) {
      fetchData(category)
    } else {
      setData([])
    }
  }, [fetchData, category])

  return { data, isLoading, error }
}
