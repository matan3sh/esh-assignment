import { Button, Space, TableProps } from 'antd'
import { People } from '../../types'
import { capitalizeFirstLetter } from '../../utils'

export const columns = (
  onDelete: (key: string) => void,
  handleOpenEditModal: (record: People) => void
): TableProps<People>['columns'] => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Birth Year',
    dataIndex: 'birth_year',
    key: 'birth_year',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render: (text: string) => <span>{capitalizeFirstLetter(text)}</span>,
  },
  {
    title: 'Height',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'Mass',
    dataIndex: 'mass',
    key: 'mass',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={() => handleOpenEditModal(record)}>Edit</Button>
        <Button danger onClick={() => onDelete(record.name)}>
          Delete
        </Button>
      </Space>
    ),
  },
]
