import React from "react"

import GlobalStyle from './components/GlobalStyle';
import StyledInput from './components/Input';
import StyledButton from './components/Button';
import StyledFieldset from './components/Fieldset';
import { StyledFormWrapper, StyledForm } from './components/Form';
import StyledError from "./components/LabelError";

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
