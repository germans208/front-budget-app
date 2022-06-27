import React from "react"
import styled, { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  background: black;
  height: 100%;
  margin: 0;
 // color: white;
}
`
const sharedStyle = css`
 // background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyle}
`
const StyledButton = styled.button`
  display: block;
  background-color: blue;
  color: white;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
`
const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }

`
const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2>ABM de operaciones (ingresos y egresos)</h2>
          <label htmlFor="concept">Concepto</label>
          <StyledInput type="input" name="concept" />
          <label htmlFor="amount">Monto</label>
          <StyledInput type="number" name="amount" />
          <label htmlFor="date">Fecha</label>
          <StyledInput type="date" name="date" />

          <StyledFieldset>
            <legend>Tipo</legend>
            <label>
              <input type="radio" value="ingreso" name="type" />
              Ingreso
            </label>
            <label>
              <input type="radio" value="engreso" name="type" />
              Egreso
            </label>
          </StyledFieldset>
          <StyledError><p>Mensaje de Error</p></StyledError>

          <StyledButton type="submit">Guardar</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </div>
  )
}

export default App
