import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Home from "components/pages/Home"
import Login from "components/pages/Login"

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`

const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
