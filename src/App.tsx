import * as React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import 'typeface-roboto'

class App extends React.Component {
  public render() {
    return (
    <div>
      <Paper>
        <Typography variant="headline" component="h3">
          Shinnosuke Yamamoto
          @mrtry
        </Typography>
      </Paper>
    </div>
    )
  }
}

export default App
