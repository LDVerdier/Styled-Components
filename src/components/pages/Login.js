import React, { useState, useEffect } from "react"
import { PageLayout, Input, PasswordInput, Button, Spinner } from "components/common"
import styled from "styled-components"

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`

let timeout

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (event) => {
    event.persist()
    setFormFields((formFieldsValues) => ({
      ...formFieldsValues,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(
    () => () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    },
    []
  )

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        { loading ? <Spinner /> : (
        <>
          <Input
            name="username"
            placeholder="Username"
            value={formFields.username}
            type="text"
            onChange={handleInputChange}
          />
          <PasswordInput
            name="password"
            value={formFields.password}
            onChange={handleInputChange}
          />
        </>)}
        <Button type="submit" large disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </Button>   
          {!loading && (
            <>
              <div className="alt-text">OR</div>
              <Button type="button" secondary>
                Register
              </Button>
            </>
          )}
      </Form>
    </PageLayout>
  )
}

export default Login
