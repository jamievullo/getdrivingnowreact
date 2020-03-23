import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import axios from 'axios'

class Form2 extends React.Component {
    
    state = {
        address: "",
        apt: "",
        city: "",
        state: "",
        residence_type: "",
        monthly_housing_cost: "",
        address_duration_years: "",
        address_duration_months: "",
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

        // after submit, redirects to flight page
        const user = this.state
        axios.patch(`http://localhost:3001/users/${this.state.userId}`, { user }, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data) {
            
                this.setState({
                    redirect: "/form3",
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
            <div className='fb2'>
                <Container>
                    <Col>
                        <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                            <Form.Row className='justify-content-md-center'>
                                <Form.Group>
                                    <Col>
                                        <Form.Label style={{color: "white"}}>Address:</Form.Label>
                                        <Form.Control id="address" type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                                        <Form.Label style={{color: "white"}}>Apt:</Form.Label>
                                        <Form.Control id="apt" type="text" name="apt" placeholder="Apt #" value={this.state.apt} onChange={this.handleChange} />
                                        <Form.Label style={{color: "white"}}>City:</Form.Label>
                                        <Form.Control id="city" type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} />
                                        <Form.Label style={{color: "white"}}>State:</Form.Label>
                                        <Form.Control id="state" type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} />
                                        <Form.Label style={{color: "white"}}>Residence Type:</Form.Label>
                                        <Form.Control as="select" id="residence_type" name="residence_type" value={this.state.residence_type} onChange={this.handleChange}>
                                            <option>Rent</option>
                                            <option>Buying Home/Paying Mortgage</option>
                                            <option>Lives w/Relatives</option>
                                            <option>Owns Home Outright</option>
                                        </Form.Control>
                                        <Form.Label style={{color: "white"}}>Monthly Housing Cost:</Form.Label>
                                        <Form.Control id="monthly_housing_cost" as="select" name="monthly_housing_cost" value={this.state.monthly_housing_cost} onChange={this.handleChange}>
                                            <option>$50</option>
                                            <option>$100</option>
                                            <option>$150</option>
                                            <option>$200</option>
                                            <option>$250</option>
                                            <option>$300</option>
                                            <option>$350</option>
                                            <option>$400</option>
                                            <option>$450</option>
                                            <option>$500</option>
                                            <option>$550</option>
                                            <option>$600</option>
                                            <option>$650</option>
                                            <option>$700</option>
                                            <option>$750</option>
                                            <option>$800</option>
                                            <option>$850</option>
                                            <option>$900</option>
                                            <option>$950</option>
                                            <option>$1000</option>
                                            <option>$1050</option>
                                            <option>$1100</option>
                                            <option>$1150</option>
                                            <option>$1200</option>
                                            <option>$1250</option>
                                            <option>$1300</option>
                                            <option>$1350</option>
                                            <option>$1400</option>
                                            <option>$1450</option>
                                            <option>$1500</option>
                                            <option>$1550</option>
                                            <option>$1600</option>
                                            <option>$1650</option>
                                            <option>$1700</option>
                                            <option>$1750</option>
                                            <option>$1800</option>
                                            <option>$1850</option>
                                            <option>$1900</option>
                                            <option>$1950</option>
                                            <option>$2000</option>
                                            <option>$2050</option>
                                            <option>$2100</option>
                                            <option>$2150</option>
                                            <option>$2200</option>
                                            <option>$2250</option>
                                            <option>$2300</option>
                                            <option>$2350</option>
                                            <option>$2400</option>
                                            <option>$2450</option>
                                        </Form.Control>
                                        <Form.Label style={{color: "white"}}>Address Duration Years:</Form.Label>
                                        <Form.Control id="address_duration_years" as='select' name="address_duration_years" value={this.state.address_duration_years} onChange={this.handleChange}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                        </Form.Control>
                                        <Form.Label style={{color: "white"}}>Address Duration Months:</Form.Label>
                                        <Form.Control id="address_duration_months" as='select' name="address_duration_months" value={this.state.address_duration_months} onChange={this.handleChange}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </Form.Control>
                                    </Col>
                                    <Link className="nav-link" 
                                        to='/form3'
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
                <div style={{height: "90px"}}></div>
            </div>
        )
    }
}

export default Form2;
