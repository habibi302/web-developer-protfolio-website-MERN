import React from 'react'
import classes from './works.module.css'
import { WorkCard } from '../../components'

export default function Works() {
  return (
    <>
      <div className={classes.works}>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1>Latest Works</h1>
            <p>Perfect solutions fro digital experience</p>
            <WorkCard />
            <h1 className={classes.all_projects}>ALL PROJECTS</h1>
          </div>

          <div className={classes.right}>
            <WorkCard />
            <WorkCard />
          </div>
         </div> 
      </div>
    </>
  )
}
