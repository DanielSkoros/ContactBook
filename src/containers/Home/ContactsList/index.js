import React, {Component} from 'react';
import Contact from "../../../components/Contact";

class ContactsList extends Component {
    render() {
        return (
            <div>
                <Contact
                    name={'name'}
                    lastName={'lastname'}
                    id={1}
                    eventClickHandler={this.props.changeSelectedContact}/>
            </div>
        );
    }
}

export default ContactsList;
