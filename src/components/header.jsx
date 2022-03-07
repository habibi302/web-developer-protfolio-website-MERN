import React,{useState} from 'react';
import classes from "../core-ui/header.module.css";
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faEma } from '@fortawesome/free-brands-svg-icons';
import { faChampagneGlasses, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faNavicon} from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  const [activeClass, setActiveClass] = useState("");

  function setClass(e){
      
  }

  return (
    <div>
    <div className={classes.header}>
      <div className={classes.container}>
      <div className={classes.brand_name}>
        <span className={classes.first_part}>Habibur</span><span className={classes.last_part}>Rahman</span>
      </div>
      <FontAwesomeIcon className={classes.nav_icon} icon={faNavicon}/>
        <div className={classes.menus}>
          <ul>
            <li><Link className={[classes.link, classes.active].join(' ')}  to="#">Home</Link></li>
            <li><Link className={classes.link} name="0" to="#">Services</Link></li>
            <li><Link className={classes.link} name="1" to="#" onClick={(e)=>{}}>Works</Link></li>
            <li><Link className={classes.link} name="2" to="#">Notes</Link></li>
            <li><Link className={classes.link} name="3" to="#">Contacts</Link></li>
          </ul>
        </div>
        <hr></hr>
        <div className='contact_icons'>
          <ul>
            <li><Link className={classes.link} to="/"><FontAwesomeIcon className={classes.icon} icon={faTwitter}/><span>Twiterr</span></Link></li>
            <li><Link className={classes.link} to="/services"><FontAwesomeIcon className={classes.icon} icon={faGithub}/><span>Github</span></Link></li>
            <li><Link className={classes.link} to="/services"><FontAwesomeIcon className={classes.icon} icon={faEnvelope}/><span>Gmail</span></Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  )
}
