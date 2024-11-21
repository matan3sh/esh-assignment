import styled from '@emotion/styled'

export const StyledAutoComplete = styled.div`
  background: white;
  width: 400px;
  margin-top: 10px;
  max-height: 375px;
  height: fit-content;
  overflow-y: auto;
  position: absolute;
  top: 66px;
  cursor: pointer;
  font-size: 18px;
  display: block;
  color: #000;
  padding-bottom: 12px;

  :hover {
    background: #fff;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  p {
    font-size: 13px;
    align-items: center;
    padding: 12px;
    :hover {
      color: #fff;
      background-color: #6d7e8f;
    }
  }

  .ant-divider {
    margin: 0;
  }
`
