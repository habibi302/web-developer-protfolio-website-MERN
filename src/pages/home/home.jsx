import React from 'react'
import classes from '../home/home.module.css';
import {Header} from "../../components";
import {Services, Works} from "../../pages";
import myPhoto from "../../assests/images/my-pic.png";
import Contact from '../contact/contact';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Header />
        <div className={classes.home_page}>
          <div className={classes.container}>
            <div className={classes.left_side}>
              <h1 className={classes.my_title}>Title will go there</h1>
              <p className={classes.my_slogan}>My Slogan will go there</p>
              <p className={classes.my_desc}>All Description will go there</p>
              <p className={classes.chat_with_me}>Let's Chat!</p>
              <div className={classes.works_and_experiences}>
                <div className={classes.experiences}>
                  <h1>4</h1>
                  <p>this is my<br/> experience</p>
                </div>
                <div className={classes.works}>
                  <h1>4</h1>
                  <p>this is my<br/> experience</p>
                </div>
              </div>  
            </div>
            <div className={classes.right_side}>
              <div className={classes.circle}/>
              <div className={classes.node_js}>
              <FontAwesomeIcon className={classes.node_js_icon} icon={faNodeJs}/>
              </div>
              <div className={classes.react_js}>
              <FontAwesomeIcon className={classes.react_js_icon} icon={faReact}/>
              </div>
              <div className={classes.dot}/>
              <img className={classes.my_photo} src={myPhoto}/>
            </div>
          </div>
        </div>
        <Services />
        <Works />
        <Contact />
    </>
  )
}
