import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client"
import { LOGIN } from "./mutations/userMutations"
import { Form, Button, Container, Row, Col, Carousel } from "react-bootstrap"

const Login = () => {
  const [firstNameInput, setFirstNameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [loginMutation] = useMutation(LOGIN, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.login.token)
    },
  })

  useEffect(() => {
    document.title = "C.H.K. Todo App"
  }, [])
  return (
    // <div
    // 	style={{
    // 		display: 'flex',
    // 		flexDirection: 'column',
    // 		width: '50%'
    // 	}}
    // >
    // 	<input
    // 		placeholder='Manny'
    // 		value={firstNameInput}
    // 		onChange={(e) => setFirstNameInput(e.target.value)}
    // 	/>
    // 	<input
    // 		type='password'
    // 		value={passwordInput}
    // 		onChange={(e) => setPasswordInput(e.target.value)}
    // 	/>
    // 	<button
    // 		onClick={async () => {
    // 			await loginMutation({
    // 				variables: {
    // 					firstName: firstNameInput,
    // 					password: passwordInput,
    // 				}
    // 			});
    // 		}}
    // 	>
    // 		Login
    // 	</button>
    // </div>

    <Container>
<Row xs={12} md={12} lg={12}>

<Col xs={4} md={4} lg={4}>

</Col>

<Col xs={4} md={4} lg={4}>
<p style={{ fontSize: 55, fontWeight: 'bold' }}>C.H.K. Todo App</p>
</Col>

</Row>
      <Row xs={4} md={4} lg={4}>
		{/* Made this to center LOGIN form */}
<Col xs={4} md={4} lg={4}>

</Col>

        <Col xs={4} md={4} lg={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
