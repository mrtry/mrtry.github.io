import * as React from 'react'
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'

interface AnchorDictionary {
  text: string,
  url: string,
}

const anchorDictionary: AnchorDictionary[] = [
  { text: 'はてなブログ', url: 'http://mrtry.hatenablog.jp' },
  { text: 'Twitter', url: 'https://twitter.com/mrtry_' },
  { text: 'Facebook', url: 'https://www.facebook.com/symmt9302' },
  { text: 'GitHub', url: 'https://github.com/mrtry' },
  { text: 'SpeakerDeck', url: 'https://speakerdeck.com/mrtry' },
]

const Anchor = (props: WithStyles) => (
  <div className={props.classes.container}>
    <Typography variant='headline'>
      SNS
    </Typography>

    <Typography variant='body2'>
      <ul className={props.classes.ul}>
        {
          anchorDictionary.map(it =>
            <li><a href={it.url}>{it.text}</a></li>,
          )
        }
      </ul>
    </Typography>
  </div>
)

const styles: StyleRulesCallback = theme => ({
  container: {
  },
  ul: {
    marginTop: '8px',
    marginBottom: '8px',
  },
})

export default withStyles(styles)(Anchor)
