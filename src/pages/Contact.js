import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <a className="contactMaiTO" href="mailto:luc.burckel12@gmail.com">
                                <i className="fas fa-envelope"></i>
                                <span>luc.burckel12@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Strasbourg 67000</span>     
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;