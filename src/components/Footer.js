import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        //trying to put a grey or silver-ish border on top of footer
        <footer id="footer" className="footer">
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        getdrivingnow.com
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        © 2020 GetDrivingNow. All rights reserved.
                    </Col>
                </Row>
            </Container>           
        </footer>
    )
}