import React from 'react'
import { Redirect } from "react-router-dom";
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

class AboutUs extends React.Component {

    state = {
        redirect: null
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            redirect: '/signup'
        })  
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: '/signup'
            }}/>
        }
        return (
            <div className='aboutUs'>
                <Container>
                    <Col>
                        <h3><strong>Since 1946</strong></h3>                       
                            <span>
                                GetDrivingNow.com is owned by Vullo Motors Inc., one of the first car 
                                dealerships in the state of Pennsylvania. For almost 75 years we have
                                been servicing the needs of Northeastern PA. We have a spotless record
                                when it comes to customer service and our goal has always been to deliver 
                                an experience to the consumer that is second to no one.<br/><br/> 
                                We have been helping customers with credit issues for over 30 years and developed a
                                financing product that truly put our customers first. We are now using our
                                extensive experience to set you up with only dealers that will get you 
                                a vehicle that aligns with your life needs. Specifically covering
                                reliability, future value, gas mileage, and low interest, at a reasonable price.  
                            </span><br/><br/><br/>
                                                
                        <h3><strong>We Help you to get the best financing for the vehicle you need!</strong></h3>
                            <span>
                                GetDrivingNow.com connects you to only trusted car dealers and lenders in 
                                your area so you can get the financing you need quickly to buy a new or 
                                used car while establishing or re-establishing your credit.<br/><br/>

                                We connect you with proven dealerships and lenders. We specialize in first time 
                                buyers, every credit issue including delinquencies and repossessions, people with 
                                bankruptcy discharges, self-employed, and fixed-income to get financed for new 
                                or late model cars. We help people every day. Apply Now!!
                            </span>
                            <div style={{height: "15px"}}></div>
                            <Button className="applyNowBtn2 d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "black"}} size="lg" type="submit" onClick={this.handleClick}>
                                Apply Now
                            </Button>                            
                    </Col>
                </Container>
                <div style={{height: "50px"}}></div>
            </div>
        )
    }
}

export default AboutUs;