import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import LeaderBoardListItem from './LeaderBoardListItem'

const LeaderBoardList = ({ users }) => {

  const sortedUserIds = Object.keys(users).sort((a, b) => {
    const aSum = Object.keys(users[a].answers).length + users[a].questions.length
    const bSum = Object.keys(users[b].answers).length + users[b].questions.length
    return bSum - aSum
  })

  return (
    <Grid textAlign='center'>
      {
        sortedUserIds.map((userId) => {
          const { name, avatarURL, answers, questions } = users[userId];
          return (
            <Grid.Row key={userId} columns={1}>
              <LeaderBoardListItem name={name} avatarURL={avatarURL} numAnswers={Object.keys(answers).length} numQuestions={questions.length} />
            </Grid.Row>
          )
        })
      }
    </Grid>
  )

}

const mapStateToProps = ({ users }) => ({
  users
})

export default connect(mapStateToProps)(LeaderBoardList)