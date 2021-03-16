import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleVoteQuestion } from '../actions/questions'
import AnswerBox from './AnswerBox'
import AnswerResultList from './AnswerResultList'
import AnswerSubmit from './AnswerSubmit'

const QuestionContainer = ({ match, dispatch, users, questions, authedUser }) => {
  const { question_id } = match.params
  const question = questions[question_id]

  if (!question) {
    return (
      <div>
        404 messages
      </div>
    )
  }

  const author = question.author
  const { avatarURL, name } = users[author]

  const optionOneVotes = question.optionOne.votes
  const optionTwoVotes = question.optionTwo.votes
  const totalVotes = optionOneVotes.length + optionTwoVotes.length
  const votedOne = optionOneVotes.find((user) => user === authedUser)
  const votedTwo = optionTwoVotes.find((user) => user === authedUser)

  const handleOnSubmit = (selectedOption) => {
    console.log(selectedOption)
    dispatch(handleVoteQuestion(question_id, selectedOption))
  }

  return (
    <AnswerBox headerText={`Asked by ${name}`} avatarURL={avatarURL}>
      {votedOne || votedTwo ?
        <AnswerResultList
          optionOneVotes={optionOneVotes.length}
          optionOneText={question.optionOne.text}
          votedOne={votedOne}
          optionTwoVotes={optionTwoVotes.length}
          optionTwoText={question.optionTwo.text}
          votedTwo={votedTwo}
          totalVotes={totalVotes} />
        :
        <AnswerSubmit
          optionOneText={question.optionOne.text}
          optionTwoText={question.optionTwo.text}
          onSubmit={handleOnSubmit} />
      }
    </AnswerBox>
  )

}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  users,
  questions,
  authedUser
})

export default withRouter(connect(mapStateToProps)(QuestionContainer))