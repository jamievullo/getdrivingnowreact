import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import axios from 'axios'

class Form3 extends React.Component {

    state = {
        phone: "",
        dob: "",
        ssn: "",
        bankruptcy: "",
        redirect: null,
        userId: this.props.location.state.currentUser.id,
        currentUser: null
    }

    handleChange = (event) => {      
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = this.state
        axios.patch(`http://localhost:3001/users/${this.state.userId}`, { user }, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data) {
            
                this.setState({
                    redirect: "/form4",
                    currentUser: response.data.user
                })
        } else {
            this.setState({
                errors: response.data.errors
            })
            }
        })
        .catch(error => console.log('api errors:', error))
    }

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
            <div className='fb3'>
                <Container>
                    <Col>
                        <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                            <Form.Row className="justify-content-md-center">
                            <Form.Group>
                                <Col>
                                    <Form.Label style={{color: "white"}}>Phone:</Form.Label>
                                    <Form.Control id="phone" type="text" name="phone" placeholder="xxx-xxx-xxxx" value={this.state.phone} onChange={this.handleChange} />
                                    <Form.Label style={{color: "white"}}>Date of Birth:</Form.Label>
                                    <Form.Control id="dob" type="text" name="dob" placeholder="dd-mm-yyyy" value={this.state.dob} onChange={this.handleChange} />
                                    <Form.Label style={{color: "white"}}>Social Security Number:</Form.Label>
                                    <Form.Control id="ssn" type="text" name="ssn" placeholder="xxx-xx-xxxx" value={this.state.ssn} onChange={this.handleChange} />
                                    <Form.Label style={{color: "white"}}>Bankruptcy:</Form.Label>
                                    <Form.Check label='True' id="bankruptcy" type="radio" name="bankruptcy" style={{color: "white"}} value='true' onChange={this.handleChange} />                                        
                                    <Form.Check label='False' id="bankruptcy" type="radio" name="bankruptcy" style={{color: "white"}} value='false' onChange={this.handleChange} />
                                </Col>
                                    <Link className="nav-link" 
                                        to='/form4'
                                        exact="true"
                                    >
                                    <Button className="button d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "#212747"}} size="lg" type="submit">
                                        Continue
                                    </Button>
                                    </Link>
                            </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                </Container>
                <div style={{height: "350px"}}></div>
            </div>
        )
    }
}

export default Form3;
