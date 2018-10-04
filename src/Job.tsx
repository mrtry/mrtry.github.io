import * as React from 'react'
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'

interface OrganizationDescription {
  organization: string,
  date: string,
  works: WorkDescription[],
}

interface WorkDescription {
  duty: string,
  descriptions: string[],
}

const organizationDescription: OrganizationDescription[] = [
  {
    organization: '株式会社ノハナ',
    date: '2018/07 - ',
    works: [
      {
        duty: 'Androidアプリエンジニア',
        descriptions: [
          'Androidアプリの開発',
        ],
      },
    ],
  },
  {
    organization: 'SideWorks',
    date: '2018/09 - ',
    works: [
      {
        duty: 'アプリエンジニア',
        descriptions: [
          'Expoを用いたマルチプラットフォームアプリの開発',
        ],
      },
    ],
  },
  {
    organization: '株式会社オトバンク',
    date: '2016/04 - 2018/04',
    works: [
      {
        duty: 'サーバーサイドエンジニア',
        descriptions: [
          'Symfony2による自社ECサイトの改修',
          '社内の音源エンコードサーバーの保守',
        ],
      },
      {
        duty: 'アプリエンジニア',
        descriptions: [
          'Androidアプリの保守',
          'React Nativeによるマルチプラットフォームな新規アプリ開発',
        ],
      },
      {
        duty: 'CS対応',
        descriptions: [
          'カスタマーデスクの技術内容の一次請け',
        ],
      },
    ],
  },
  {
    organization: '株式会社コーテッグ',
    date: '2017/06 - 2017/12',
    works: [
      {
        duty: 'アプリ開発',
        descriptions: [
          'Androidアプリの受託開発',
        ],
      },
    ],
  },
]

const Anchor = (props: WithStyles) => (
  <div className={props.classes.container}>
    <Typography variant='headline'>
      職歴
    </Typography>

    {
      organizationDescription.map(it =>
        <React.Fragment>
          <Typography variant='title'>
            {it.organization}
          </Typography>

          <Typography variant='body2'>
            <dt className={props.classes.dt}>期間</dt>
            <dd>{it.date}</dd>

            {
              it.works.map(work =>
                <React.Fragment>
                  <p className={props.classes.p}>{work.duty}</p>
                  <ul className={props.classes.ul}>
                    {
                      work.descriptions.map(description =>
                        <li>{description}</li>,
                      )
                    }
                  </ul>
                </React.Fragment>,
              )
            }
          </Typography>
        </React.Fragment>,
      )
    }
  </div>
)

const styles: StyleRulesCallback = theme => ({
  container: {
  },
  p: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  dt: {
    float: 'left',
    fontWeight: 'bold',
  },
  ul: {
    marginTop: '8px',
    marginBottom: '8px',
  },
})

export default withStyles(styles)(Anchor)
