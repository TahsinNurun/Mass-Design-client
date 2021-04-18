import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,  faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const backgroundStyle = {
        backgroundColor:'rgba(185, 133, 36, 0.719) ',
        height: '80%',
        content:' ',
        position: 'relative',
        /* top: 0; */
        right: '0', 
        zIndex: '-1'}
    return (
        <section className="mt-5 p-5" style={backgroundStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <p>H # 000(3rd floor), Road 32 <br /> Avenue Karwan, Dampara, Bangladesh</p>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Project</p>
                        <p>Our Team</p>
                        <p>Terms conditions</p>
                        <p>Submit Listing</p>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Quick Links</h5>
                        <p>Quick Links</p>
                        <p>Rentals</p>
                        <p>Sales</p>
                        <p>Contact</p>
                        <p>Our Blog</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h5>About us</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur ab reprehenderit!</p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></li>
                            <li className="list-inline-item"><FontAwesomeIcon className="icon" icon={faInstagram} /></li>
                            <li className="list-inline-item"><FontAwesomeIcon className="icon" icon={faInstagram} /></li>
                            <li className="list-inline-item"><FontAwesomeIcon className="icon" icon={faLinkedin} /></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div>
                <p className="text-center"><small >copyright mass design 2021</small></p>
            </div>
        </section>
    );
};

export default Footer;