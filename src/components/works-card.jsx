import React from 'react';
import classes from "../core-ui/works-card.module.css";

import image from "../assests/images/3.jpg";

export default function WorkCard() {
  return (
    <>
        <div className={classes.work_card}>
            <div className={classes.container}>
                <div className={classes.top_side}>
                    <div className={classes.left_side}>
                        <h1>Title</h1>
                    </div>
                    <div className={classes.right_side}>
                        <h1>Right-Side</h1>
                        <h1>Right-Side</h1>
                        <h1>Right-Side</h1>
                    </div>
                </div>
                <div className={classes.bottom_side}>
                    <img src={image} alt="websiteimage"/>
                </div>
            </div>
        </div>
    </>
  )
}
