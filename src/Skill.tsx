import * as React from 'react'
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'

interface AnchorDictionary {
  skill: string,
  descriptions: string[],
}

const anchorDictionary: AnchorDictionary[] = [
  {
    skill: 'PHP',
    descriptions: [
      '業務にて「Symfony2」を利用し、サーバーサイドの開発を行ったことがある',
    ],
  },
  {
    skill: 'Java/Kotlin',
    descriptions: [
      'Androidアプリ開発で書いていた',
      '業務では、音楽再生アプリの実装経験がある',
      'DataBinding、RxJava、Retrofit、AACなどを趣味で使っている',
    ],
  },
  {
    skill: 'React Native',
    descriptions: [
      'マルチプラットフォームなアプリ開発をするために利用した事がある',
      '業務では、音楽再生アプリの実装経験がある',
      'TypeScript、Redux、NativeBase、react-navigation、react-native-fsなどを利用したことがある',
    ],
  },
]

const Anchor = (props: WithStyles) => (
  <div className={props.classes.container}>
    <Typography variant='headline'>
      スキル
    </Typography>

    {
      anchorDictionary.map(it =>
        <React.Fragment>
          <Typography variant='title'>
            {it.skill}
          </Typography>

          <Typography variant='body2'>
            <ul className={props.classes.ul}>
              {
                it.descriptions.map(description =>
                  <li>{description}</li>,
                )
              }
            </ul>
          </Typography>
        </React.Fragment>,
      )
    }
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
