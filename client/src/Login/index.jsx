import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FloatingLabel, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import './styles.scss';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import signupReducer, { initialState } from '../Signup/signupReducer';
import { UserContext } from '../UserContextProvider';
import useApi from '../useApi';
import { ENDPOINTS, REQUEST_TYPES } from '../apiUtils';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { state: redirectionURL } = useLocation();
  const navigate = useNavigate();
  console.log("🚀 ~ Login ~ redirectionURL:", redirectionURL)

  const [state, dispatch] = useReducer(signupReducer, initialState);
  const { username, password } = state;
  const [showPassword, setShowPassword] = useState(false);

  const [showResetForm, setShowResetForm] = useState(false)
  const [otp, setOtp] = useState(null)

  const { makeRequest, response } = useApi(ENDPOINTS.USER.LOGIN, REQUEST_TYPES.POST);
  const { makeRequest: makeResetPwd, response: resetPwdResponse } = useApi(ENDPOINTS.USER.RESET_PASSWORD, REQUEST_TYPES.PATCH);
  console.log("🚀 ~ Login ~ response:", response)

  useEffect(() => {
    if (redirectionURL && response?.success && response?.data?.username) {
      // logged in successfully!!!
      navigate(redirectionURL, { replace: true })
    }
  }, [response])

  useEffect(() => {
    if (resetPwdResponse?.success) {
      setShowResetForm(false);
    }
  }, [resetPwdResponse])

  const usernameRef = useRef(null);

  useEffect(() => {
    console.log(usernameRef.current);
    usernameRef.current?.focus();
  }, [])


  const actionCreator = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }


  const onLogin = () => {
    const payload = { username: username.value, password: password.value }
    makeRequest(payload);
  }

  const resetPassword = async () => {
    const payload = { username: username.value, password: password.value, otp }
    await makeResetPwd(payload);
    setOtp('');
    console.log("🚀 ~ resetPassword ~ resetPwdResponse:", resetPwdResponse)
  };


  const onPasswordChange = (e) => {
    const { value } = e.target;
    if (value.length > 6) {
      e.preventDefault();
    } else {
      setOtp(value)
    }
  }

  const isFormValid = username.isValid && password.value?.length;
  console.log("🚀 ~ Login ~ isFormValid:", isFormValid)


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
              {showResetForm && <FormGroup controlId='otp' className='mb-3 position-relative'>
                <FormLabel>OTP</FormLabel>
                <FormControl type='number' placeholder='Enter otp' name='otp' value={otp} onChange={onPasswordChange} />
              </FormGroup>}
            </CardBody>
            <CardFooter className='d-flex justify-content-between'>
              {!showResetForm ?
                <>
                  <Button variant='outline-primary' disabled={!isFormValid} onClick={onLogin}>Login</Button>
                  <Button variant='link' onClick={() => setShowResetForm(true)}>Forgot Password</Button>
                </>
                :
                <>
                  <Button variant='outline-primary' disabled={!isFormValid || !otp} onClick={resetPassword}>Reset Password</Button>
                  <Button variant='link' onClick={() => setShowResetForm(false)}>Login</Button>
                </>
              }

            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}

export default Login