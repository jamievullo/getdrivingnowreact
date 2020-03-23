import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class CreateAccount extends React.Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        errors: '',
        redirect: null,
        currentUser: null
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        const {email, password, password_confirmation} = this.state
        let user = {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(response => {
            if (response.data.status === 'created') {
                console.log(response)
                this.props.handleLogin(response.data)
                
                this.setState({
                    redirect: "/form1",
                    currentUser: response.data.user
                })
            //sets response.data.user to userDate variable
            //  const userData = response.data.user
            //calls dispatch method 'add new user' and passes user data payload
            //  this.props.dispatch({ type: 'ADD_NEW_USER', payload: userData })
            // this.redirect()
            } else {
            this.setState({
                errors: response.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    };
//    redirect = () => {
//       this.props.history.push('/')
//    }

    //   this.setState({
    //      redirect: "/"
    //   })

    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    currentUser: this.state.currentUser
                }
            }}/>
        }
        return (
            <div className='signup'>
                <Col>
                    <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                        <Form.Row>
                            <Form.Group>
                                <Col>
                                    <Form.Label style={{color: "#364182"}}>Email</Form.Label>
                                    <Form.Control id="email" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                                {/* </Col>
                            </Form.Group>
                            <Form.Group>
                                <Col> */}
                                    <Form.Label style={{color: "#364182"}}>Password</Form.Label>
                                    <Form.Control id="password" type="password" name="password" placeholder="Password 6-8 digits" value={this.state.password} onChange={this.handleChange} />
                                {/* </Col>
                            </Form.Group>
                            <Form.Group>
                                <Col> */}
                                    <Form.Label style={{color: "#364182"}}>Confirm Password</Form.Label>
                                    <Form.Control id="password_confirmation" type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange} />
                                </Col>
                                </Form.Group>
                                </Form.Row>
                                <Link className="nav-link" 
                                to='/'
                                exact="true"
                                >
                            <Button id="cabutton" className="d-inline-block" style={{backgroundColor: "#212747"}}size="lg" type="submit">
                                Get Driving
                            </Button>
                        </Link>                  
                    </Form>
                </Col>  
                <div style={{height: "550px"}}></div>          
            </div>
        )
    }
    
}

export default CreateAccount;