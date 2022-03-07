import React from 'react'
import classes from "../services/services.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBezierCurve} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <>
        <div className={classes.services}>
            <div className={classes.container}>


                <div className={classes.left_side}>
                    <div className={classes.skills_card}>
                        <div className={classes.title_desc_icon}>
                            <div className={classes.title_desc}>
                            <h1 className={classes.title}>Design</h1>
                            <p className={classes.desc}>Description will go there</p>
                            </div>
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faBezierCurve}/>
                            </div>
                        </div>
                        <p className={classes.project_done}>20 PROJECTS</p>
                    </div>
                    <div className={classes.skills_card}>
                        <div className={classes.title_desc_icon}>
                            <div className={classes.title_desc}>
                            <h1 className={classes.title}>Design</h1>
                            <p className={classes.desc}>Description will go there</p>
                            </div>
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faBezierCurve}/>
                            </div>
                        </div>
                        <p className={classes.project_done}>20 PROJECTS</p>
                    </div>
                    <div className={classes.skills_card}>
                        <div className={classes.title_desc_icon}>
                            <div className={classes.title_desc}>
                            <h1 className={classes.title}>Design</h1>
                            <p className={classes.desc}>Description will go there</p>
                            </div>
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faBezierCurve}/>
                            </div>
                        </div>
                        <p className={classes.project_done}>20 PROJECTS</p>
                    </div>
                </div>


                <div className={classes.right_side}>
                    <p className={classes.introduce}>introduce</p>
                    <h1>Hello! I am Habibur <br/> Rahman</h1>
                    <h3>Every great design begin with an <br/> even better story</h3>
                    <p className={classes.desc}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                     industry. Lorem Ipsum has been the industry's standard 
                     dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen
                       book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the 
                        release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
