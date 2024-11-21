import { useQuery } from '@tanstack/react-query'
import { getDataBySearchTerm } from '../actions'

export const useGetDataBySearchTerm = <T>(
  searchTerm: string,
  entity: string
) => {
  const fetchData = async (): Promise<T[]> => {
    const data = await getDataBySearchTerm(searchTerm, entity)
    return data.results
  }

  const { data, error, isLoading, isError } = useQuery<T[], Error>({
    queryKey: ['searchData', entity, searchTerm],
    queryFn: fetchData,
    enabled: !!searchTerm,
    retry: 2,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  })

  return {
    data: data || [],
    isLoading,
    error: isError ? error : null,
  }
}
