import styled from '@emotion/styled'

export const StyledContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const StyledInputContainer = styled.div`
  background-color: white;
  border-radius: 40px;
  width: 500px;
  min-height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledInput = styled.input`
  flex: 1;
  padding: 0 20px;
  font-size: 20px;
  background-color: transparent;
`

export const StyledSearchIcon = styled.div`
  background-color: #fff;
  padding: 0 25px;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    font-size: 20px;
    color: #000;
  }
`
