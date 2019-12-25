import React, {Component} from 'react';
import { Container, Row, Col } from "shards-react";
import ContactsList from "./ContactsList";
import ContactDetail from "./ContactDetails";

class Home extends Component {

    state = {
        selectedContact: null,
    };

    changeSelectedContact = (id) => {
        this.setState({
            selectedContact: id
        })
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="1" lg="4">
                        <ContactsList changeSelectedContact={this.changeSelectedContact}/>
                    </Col>
                    <Col sm="1" lg="8">
                        <ContactDetail />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
