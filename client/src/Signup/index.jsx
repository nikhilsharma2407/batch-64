import React, { useEffect, useReducer, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FloatingLabel, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import './styles.scss';
import signupReducer, { ACTION_TYPES, initialState } from './signupReducer';

const Signup = () => {
  const [state, dispatch] = useReducer(signupReducer, initialState);

  const { name, email, username, password } = state;

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    setIsPasswordValid(Object.values(password.validation).every(Boolean));
    console.log("🚀 ~ Signup ~ Object.values(password.validation):", Object.values(password.validation, Object.values(password.validation).every(Boolean)))
  }, [password.value])


  const actionCreator = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }



  const isFormValid = name.isValid && username.isValid && email.isValid && isPasswordValid;


  return (
    <Container fluid>
      <Row>
        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
          <Card className='signup mt-3 mt-sm-5 '>
            <CardHeader>Signup</CardHeader>
            <CardBody>
              <FormGroup controlId='name' className='mb-3'>
                <FormLabel>Name</FormLabel>
                <FormControl placeholder='Enter Name' name='name'
                  onChange={(e) => dispatch({ type: ACTION_TYPES.NAME, payload: e.target.value })} />
              </FormGroup>

              <FormGroup controlId='username' className='mb-3'>
                <FormLabel>Username</FormLabel>
                <FormControl placeholder='Enter Username' name='username' onChange={actionCreator}
                />
              </FormGroup>
              <FormGroup controlId='email' className='mb-3'>
                <FormLabel>Email</FormLabel>
                <FormControl type='email' placeholder='Enter email' name='email' onChange={actionCreator} />
              </FormGroup>
              <FormGroup controlId='password' className='mb-3'>
                <FormLabel>Password</FormLabel>
                <FormControl type='password' placeholder='Enter password' name='password' onChange={actionCreator} />
              </FormGroup>
              {password?.value ? <ul className='small'>
                <li className={password.validation.hasLowerCase ? 'text-success' : 'text-danger'}>At least one lowercase letter</li>
                <li className={password.validation.hasUpperCase ? 'text-success' : 'text-danger'}>At least one uppercase letter</li>
                <li className={password.validation.hasNumber ? 'text-success' : 'text-danger'}>At least one digit</li>
                <li className={password.validation.hasSpecialCharacter ? 'text-success' : 'text-danger'}>At least one special symbol</li>
                <li className={password.validation.meetsMinChReq ? 'text-success' : 'text-danger'}>At least 8 characters</li>
              </ul> : null}

            </CardBody>
            <CardFooter className='d-flex justify-content-center'>
              <Button variant='outline-primary' disabled={!isFormValid} >Signup</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}

export default Signup