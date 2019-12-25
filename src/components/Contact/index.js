import React from 'react';

import './index.css'
const Contact = ({name, lastName, avatar, tags, description, phone, address, notes, eventClickHandler, id}) => {
    const makeInitialsAvatar = (name, lastName) => {
        return `${name.charAt(0).toLocaleUpperCase()} ${lastName.charAt(0).toUpperCase()}`
    };

    return (
            <div className={'contact'} onClick={() => eventClickHandler(2)}>
                <div className="contact__avatar">
                    <span>{!avatar ? makeInitialsAvatar(name, lastName) : null}</span>
                </div>
                <div className="contact__credentials">
                    <h2>Name LastName</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
    );
};

export default Contact;
