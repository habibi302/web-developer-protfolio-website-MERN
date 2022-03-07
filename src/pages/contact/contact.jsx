import React from 'react';
import classes from "../contact/contact.module.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <>
        <div className={classes.container}>
            <div className={classes.left_side}>
                <div className={classes.top_side}>
                    <h1>Let's make something amazing<br/>together.</h1>
                    <h1>Start by <span>saying hi</span></h1>
                </div>

                <div className={classes.bottom_side}>
                    <div className={classes.brand_name}>
                        <span className={classes.first_part}>Habibur</span><span className={classes.last_part}>Rahman</span>
                    </div>
                    <div className={classes.copyright}>
                        <p>&copy; 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>

            <div className={classes.right_side}>
                <div className={classes.top_side}>
                    <p>Introduction</p>
                    <h4>116 Fairground Rd, FL 3290, USA</h4>
                    <h2>hello@danaiel.io</h2>
                </div>
                <div className={classes.middle_side}>
                    <ol>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Contacts</li>
                    </ol>
                </div>
                <div className={classes.bottom_side}>
                    <Link to="/"><FontAwesomeIcon className={classes.icon} icon={faTwitter}/></Link>
                    <Link to="/"><FontAwesomeIcon className={classes.icon} icon={faFacebook}/></Link>
                    <Link to="/"><FontAwesomeIcon className={classes.icon} icon={faGithub}/></Link>
                    <Link to="/"><FontAwesomeIcon className={classes.icon} icon={faInstagram}/></Link>
                </div>
            </div>
        </div>
    </>
  )
}
