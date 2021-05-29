import React from "react"
import { createGlobalStyle } from "styled-components"
import { Button } from "components/common/Button"

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Primary button</Button>
      <Button secondary>Secondary button</Button>
    </>
  )
}

export default App
