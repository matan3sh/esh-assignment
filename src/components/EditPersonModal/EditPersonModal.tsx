import { Flex, Input, Modal, Select } from 'antd'
import { useState } from 'react'
import { People } from '../../types'
import { StyledLabel } from './EditPersonModal.styled'
import { genderOptions } from './EditPersonModal.utils'

interface EditPersonModalProps {
  open: boolean
  handleClose: (person?: People) => void
  person: People
}

const EditPersonModal = ({
  open,
  handleClose,
  person,
}: EditPersonModalProps) => {
  const [formData, setFormData] = useState({
    name: person?.name || '',
    birth_year: person?.birth_year || '',
    gender: person?.gender.toLocaleLowerCase() || '',
    height: person?.height || 0,
    mass: person?.mass || 0,
  })

  const handleInputChange = <T,>(key: string, value: T) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <Modal
      title="Edit Person"
      open={open}
      onOk={() => handleClose(formData)}
      onCancel={() => handleClose()}
      styles={{
        header: { borderBottom: '1px solid #eee', paddingBottom: '12px' },
      }}
      okText="Update"
      cancelText="Cancel"
    >
      <Flex vertical gap={10}>
        <Flex vertical gap={2}>
          <StyledLabel>Name:</StyledLabel>
          <Input
            value={formData.name}
            onChange={(e) => handleInputChange<string>('name', e.target.value)}
            placeholder="Enter person name"
            disabled
          />
        </Flex>
        <Flex vertical gap={2}>
          <StyledLabel>Birth year:</StyledLabel>
          <Input
            value={formData.birth_year}
            onChange={(e) =>
              handleInputChange<string>('birth_year', e.target.value)
            }
            placeholder="Enter birth year"
          />
        </Flex>
        <Flex vertical gap={2}>
          <StyledLabel>Gender:</StyledLabel>
          <Select
            options={genderOptions}
            value={formData.gender}
            onChange={(value) => handleInputChange<string>('gender', value)}
            placeholder="Select gender"
          />
        </Flex>
        <Flex vertical gap={2}>
          <StyledLabel>Height:</StyledLabel>
          <Input
            type="number"
            value={formData.height}
            onChange={(e) =>
              handleInputChange<number>('height', +e.target.value)
            }
            placeholder="Enter height"
          />
        </Flex>
        <Flex vertical gap={2}>
          <StyledLabel>Mass:</StyledLabel>
          <Input
            type="number"
            value={formData.mass}
            onChange={(e) => handleInputChange<number>('mass', +e.target.value)}
            placeholder="Enter mass"
          />
        </Flex>
      </Flex>
    </Modal>
  )
}

export default EditPersonModal