import { capitalizeFirstLetter } from '../../utils'

export const columns = [
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
]
