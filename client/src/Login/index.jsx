import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FloatingLabel, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import './styles.scss';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import signupReducer, { initialState } from '../Signup/signupReducer';
import { UserContext } from '../UserContextProvider';

const Login = () => {
  const [state, dispatch] = useReducer(signupReducer, initialState);
  const { setUserData } = useContext(UserContext)
  const { name, email, username, password } = state;
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const usernameRef = useRef(null);

  useEffect(() => {
    console.log(usernameRef.current);
    usernameRef.current?.focus();
  }, [])

  useEffect(() => {
    setIsPasswordValid(Object.values(password.validation).every(Boolean));
    console.log("🚀 ~ Signup ~ Object.values(password.validation):", Object.values(password.validation, Object.values(password.validation).every(Boolean)))
  }, [password.value])


  const actionCreator = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }


  const onLogin = () => {
    setUserData({
      username: 'test',
    })
  }

  const isFormValid = username.isValid && password.value.length;


  return (
    <Container fluid>
      <Row>
        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
          <Card className='signup mt-3 mt-sm-5 '>
            <CardHeader>Login</CardHeader>
            <CardBody>
              <FormGroup controlId='username' className='mb-3'>
                <FormLabel>Username</FormLabel>
                <FormControl ref={usernameRef} placeholder='Enter Username' name='username' onChange={actionCreator} />
                {username?.value && !username.isValid && <span className='text-danger'>Username is invalid!</span>}
                {username?.value === '' && <span className='text-danger'>Username is required!</span>}
              </FormGroup>
              <FormGroup controlId='password' className='mb-3 position-relative'>
                <FormLabel>Password</FormLabel>
                <FormControl type={showPassword ? 'text' : 'password'} placeholder='Enter password' name='password' onChange={actionCreator} />
                <span onClick={() => { setShowPassword(!showPassword) }} className='password-toggle'>{showPassword ? <Eye /> : <EyeSlash />}</span>
              </FormGroup>
            </CardBody>
            <CardFooter className='d-flex justify-content-center'>
              <Button variant='outline-primary' disabled={!isFormValid} onClick={onLogin}>Login</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}

export default Login