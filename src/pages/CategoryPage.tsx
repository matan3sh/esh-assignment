import { Flex, Table, TableProps } from 'antd'
import { useParams } from 'react-router-dom'
import { useGetDataByCategory } from '../hooks/useGetDataByCategory'
import { capitalizeFirstLetter } from '../utils'

interface DataType {
  key: string
  name: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
]

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>()
  const { data, isLoading, error } = useGetDataByCategory(categoryName)

  console.log({ data })

  return (
    <Flex justify="center" align="center">
      <h2>{capitalizeFirstLetter(categoryName)}</h2>
      {data.length > 0 && (
        <Table<DataType> columns={columns} dataSource={data} />
      )}
    </Flex>
  )
}

export default CategoryPage
