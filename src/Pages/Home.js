import React from 'react';
import {
    Container,
    Jumbotron,
    Row,
    Col,
    Card
} from 'react-bootstrap';
import { BarChartFill,Table } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export const HomePage = (props) => {
    return (
        <Container>
            <Jumbotron style={{textAlign: 'center'}}>
                <h1>Welcome</h1>
                <p>
                    This is a simple react application to show the <strong>Networth Chart</strong> and <strong>Holdings Table</strong>
                </p>
                < Row className = "justify-content-md-center" >
                    <Col sm={6} md={3} lg={3} offset={3}>
                        <Link to='/chart' style={{ textDecoration: 'none' }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title style={{ color: 'black'}}> <strong> Networth Chart </strong></Card.Title>
                                    <BarChartFill color = "rgba(26, 188, 156, 0.8)" size = {50}/>
                                </Card.Body>
                            </Card>
                        </Link> 
                        
                    </Col>
                    <Col sm={6}  md={3} lg={3}>
                        <Link to='/table' style={{ textDecoration: 'none'}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title style={{  color: 'black'}}> <strong>Holdings Table</strong> </Card.Title>
                                    <Table color = "rgba(26, 188, 156, 0.8)" size = {50}/>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default HomePage;