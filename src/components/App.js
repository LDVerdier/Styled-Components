import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Home from "components/pages/Home"
import Login from "components/pages/Login"
// import { Button } from "components/common/Button"

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
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <h1>App</h1>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
