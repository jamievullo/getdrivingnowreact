import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import axios from 'axios'

class Form4 extends React.Component {

    state = {
        employment_type: "Full-Time",
        employer_name: "",
        employer_phone_number: "",
        job_title: "",
        job_duration_years: "",
        job_duration_months: "",
        monthly_income: "",
        redirect: null,
        userId: this.props.location.state.currentUser.id
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
                    redirect: "/congratulations",
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
            }}/>
        }
        return (
            <div className='fb4'>
                <Container>
                    <Col>
                        <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                            <Form.Row className="justify-content-md-center">
                                <Form.Group>
                                    <Col>
                                        <Form.Label style={{color: "white"}}>Employment Type:</Form.Label>
                                            <Form.Control id="employment_type" as='select' name="employment_type" value={this.state.employment_type} onChange={this.handleChange}>
                                                <option>Full-Time</option>
                                                <option>Part-Time</option>
                                                <option>Retired</option>
                                                <option>Student</option>
                                                <option>Self-Employed</option>
                                            </Form.Control>
                                        <Form.Label style={{color: "white"}}>Employer Name:</Form.Label>
                                            <Form.Control id="employer_name" type="text" name="employer_name" placeholder="Employer Name" value={this.state.employer_name} onChange={this.handleChange} />
                                        <Form.Label style={{color: "white"}}>Employer Phone:</Form.Label>
                                            <Form.Control id="employer_phone_number" type="text" name="employer_phone_number" placeholder="xxx-xxx-xxxx" value={this.state.employer_phone_number} onChange={this.handleChange} />
                                        <Form.Label style={{color: "white"}}>Job Title:</Form.Label>
                                            <Form.Control id="job_title" type="text" name="job_title" placeholder="Job Title" value={this.state.job_title} onChange={this.handleChange} />
                                        <Form.Label style={{color: "white"}}>Job Duration Years:</Form.Label>
                                            <Form.Control id="job_duration_years" as='select' name="job_duration_years" value={this.state.job_duration_years} onChange={this.handleChange}>
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
                                        <Form.Label style={{color: "white"}}>Job Duration Months:</Form.Label>
                                            <Form.Control id="job_duration_months" as='select' name="job_duration_months" value={this.state.job_duration_months} onChange={this.handleChange}>
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
                                            </Form.Control>
                                        <Form.Label style={{color: "white"}}>Monthly Income:</Form.Label>
                                            <Form.Control id="monthly_income" as='select' name="monthly_income" value={this.state.monthly_income} onChange={this.handleChange}>
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
                                                <option>$2500</option>
                                                <option>$2550</option>
                                                <option>$2600</option>
                                                <option>$2650</option>
                                                <option>$2700</option>
                                                <option>$2750</option>
                                                <option>$2800</option>
                                                <option>$2850</option>
                                                <option>$2900</option>
                                                <option>$2950</option>
                                                <option>$3000</option>
                                                <option>$3050</option>
                                                <option>$3100</option>
                                                <option>$3150</option>
                                                <option>$3200</option>
                                                <option>$3250</option>
                                                <option>$3300</option>
                                                <option>$3350</option>
                                                <option>$3400</option>
                                                <option>$3450</option>
                                                <option>$3500</option>
                                                <option>$3550</option>
                                                <option>$3600</option>
                                                <option>$3650</option>
                                                <option>$3700</option>
                                                <option>$3750</option>
                                                <option>$3800</option>
                                                <option>$3850</option>
                                                <option>$3900</option>
                                                <option>$3950</option>
                                                <option>$4000</option>
                                                <option>$4050</option>
                                                <option>$4100</option>
                                                <option>$4150</option>
                                                <option>$4200</option>
                                                <option>$4250</option>
                                                <option>$4300</option>
                                                <option>$4350</option>
                                                <option>$4400</option>
                                                <option>$4450</option>
                                                <option>$4500</option>
                                                <option>$4550</option>
                                                <option>$4600</option>
                                                <option>$4650</option>
                                                <option>$4700</option>
                                                <option>$4750</option>
                                                <option>$4800</option>
                                                <option>$4850</option>
                                                <option>$4900</option>
                                                <option>$4950</option>
                                                <option>$5000</option>
                                                <option>$5050</option>
                                                <option>$5100</option>
                                                <option>$5150</option>
                                                <option>$5200</option>
                                                <option>$5250</option>
                                                <option>$5300</option>
                                                <option>$5350</option>
                                                <option>$5400</option>
                                                <option>$5450</option>
                                                <option>$5500</option>
                                                <option>$5550</option>
                                                <option>$5600</option>
                                                <option>$5650</option>
                                                <option>$5700</option>
                                                <option>$5750</option>
                                                <option>$5800</option>
                                                <option>$5850</option>
                                                <option>$5900</option>
                                                <option>$5950</option>
                                                <option>$6000</option>
                                                <option>$6050</option>
                                                <option>$6100</option>
                                                <option>$6150</option>
                                                <option>$6200</option>
                                                <option>$6250</option>
                                                <option>$6300</option>
                                                <option>$6350</option>
                                                <option>$6400</option>
                                                <option>$6450</option>
                                                <option>$6500</option>
                                                <option>$6550</option>
                                                <option>$6600</option>
                                                <option>$6650</option>
                                                <option>$6700</option>
                                                <option>$6750</option>
                                                <option>$6800</option>
                                                <option>$6850</option>
                                                <option>$6900</option>
                                                <option>$6950</option>
                                            </Form.Control>
                                    </Col>
                                    <Link className="nav-link" 
                                        to='/congratulations'
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
                <div style={{height: "140px"}}></div>
            </div>
        )
    }
}

export default Form4;
