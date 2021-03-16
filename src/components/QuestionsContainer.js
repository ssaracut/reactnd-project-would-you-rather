import { connect } from 'react-redux'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Segment, Header } from 'semantic-ui-react'
import AnswerBox from './AnswerBox'

const QuestionsContainer = ({ history, questions, collatedQuestions, users }) => {

  const [buttonIndex, setButtonIndex] = useState(0)

  const onViewPoll = (key) => {
    history.push(`/questions/${key}`)
  }

  return (
    <Segment>
      <Button.Group widths='2' style={{ width: '500px' }}>
        <Button active={buttonIndex === 0} onClick={() => setButtonIndex(0)}>Unanswered Questions</Button>
        <Button active={buttonIndex === 1} onClick={() => setButtonIndex(1)}>Answered Questions</Button>
      </Button.Group>
      {
        collatedQuestions[buttonIndex].map((key) => (
          <AnswerBox key={key} headerText={`${users[questions[key].author].name} asks:`} avatarURL={users[questions[key].author].avatarURL}>
            <Header>Would you rather</Header>
            <p>{`...${questions[key].optionOne.text}...`}</p>
            <Button fluid onClick={() => onViewPoll(key)}>View Poll</Button>
          </AnswerBox>
        ))
      }
    </Segment>
  )
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  const { answers } = users[authedUser]
  const collatedQuestions = Object.keys(questions).sort((a,b)=>{ return questions[b].timestamp - questions[a].timestamp }).reduce((collated, key) => {
    return !answers[key] ? [[...collated[0].concat(key)], [...collated[1]]] : [[...collated[0]], [...collated[1].concat(key)]]
  }, [[], []])
  console.log('mapping state to props')
  return {
    questions,
    collatedQuestions,
    users
  }
}

export default withRouter(connect(mapStateToProps)(QuestionsContainer))


