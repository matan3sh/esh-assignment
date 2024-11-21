import { useQuery } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { getDataByCategory } from '../actions'
import { Entity } from '../types'

export const useGetDataByCategory = <T>(category?: string) => {
  const fetchCategoryData = async (): Promise<T[]> => {
    if (!category || category !== Entity.People) {
      throw new Error('Invalid or unsupported category')
    }
    const data = await getDataByCategory(category)
    return data.results
  }

  const { data, error, isLoading, isError } = useQuery<T[], ReactNode>({
    queryKey: ['categoryData', category],
    queryFn: fetchCategoryData,
    enabled: !!category && category === Entity.People,
    retry: 2,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  })

  return { data, isLoading, error: isError ? error : null }
}
