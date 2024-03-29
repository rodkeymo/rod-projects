import React, {useRef, useState} from 'react'
import  {Form, Card, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from '../context/AuthContext'
import { Alert } from 'bootstrap'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
      e.preventDefault()

      signup(emailRef.current.value, passwordRef.current.value)

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {

        return setError ("passwords do not match")
      }
      try{
          setError("")
          setLoading(true)
         await signup(emailRef.current.value, passwordRef.current.value)
      } catch{
          setError("Failed to create account")
      }
      setLoading(false)

  }
  
    return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>
                Sign Up
            </h2>
            {error && <Alert variant="danger">{error}</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required />

                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} required />
                    
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>password confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef} required />
                    
                </Form.Group>
                <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        ALready have an account? Log In

    </div>
    </>
  )
}
