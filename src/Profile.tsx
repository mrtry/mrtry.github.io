import * as React from 'react'
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'

interface ProfileDictionary {
  term: string,
  discription: string,
}

const profileDictionary: ProfileDictionary[] = [
  { term: '名前', discription: '山本慎之佑 (Yamamoto Shinnosuke)' },
  { term: '誕生日', discription: '1993/04/02' },
  { term: '趣味', discription: '歌唱/料理/DIY/飲酒/マンガ/アニメ' },
  { term: 'Strength Finder', discription: '運命思考/個別化/学習欲/内省/回復思考' },
]

const Profile = (props: WithStyles) => (
  <div className={props.classes.container}>
    <Typography variant='headline'>
      基本情報
    </Typography>

    <Typography variant='body2'>
      {
        profileDictionary.map(it =>
          <dl className={props.classes.dl}>
            <dt className={props.classes.dt}>{it.term}</dt>
            <dd>{it.discription}</dd>
          </dl>,
        )
      }
    </Typography>
  </div>
)

const styles: StyleRulesCallback = theme => ({
  container: {
  },
  dl: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  dt: {
    float: 'left',
    width: '120px',
    fontWeight: 'bold',
  },
})

export default withStyles(styles)(Profile)