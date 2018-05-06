import * as React from 'react'
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles'
import Paper from 'material-ui/Paper'

import Profile from './Profile'
import Sns from './Sns'
import Skill from './Skill'
import Job from './Job'

const App = (props: WithStyles) => (
  <div className={props.classes.wrapper}>
    <Paper className={props.classes.paper}>
      <div className={props.classes.container}>
        <Profile />
        <Sns />
        <Skill />
        <Job />
      </div>
    </Paper>
  </div>
)

const styles: StyleRulesCallback = theme => ({
  wrapper: {
    maxWidth: '960px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  paper: {
  },
  container: {
    padding: '16px',
  },
})

export default withStyles(styles)(App)