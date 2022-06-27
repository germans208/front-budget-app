import styled, { css } from "styled-components"

const sharedStyle = css`
 // background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyle}
`

export default StyledInput;