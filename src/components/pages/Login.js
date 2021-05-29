import React, { useState } from "react"
import { PageLayout, Input } from "components/common"
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`

const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''});
  const handleInputChange = (event) => {
    event.persist();
    setFormFields(formFieldsValues => ({
      ...formFieldsValues,
      [event.target.name]: event.target.value,
    }))
  };
  return (
  <PageLayout>
    <h1>Login</h1>
    <Form>
      <Input
        name="username"
        placeholder="Username"
        value={formFields.username}
        type="text"
        onChange={handleInputChange}
      />
      <Input
        name="password"
        placeholder="Password"
        value={formFields.password}
        type="password"
        onChange={handleInputChange}
      />
    </Form>
  </PageLayout>
)}

export default Login
