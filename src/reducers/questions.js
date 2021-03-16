import { RECEIVE_QUESTIONS, SAVE_QUESTION, VOTE_QUESTION } from '../actions/questions'

const questions = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case VOTE_QUESTION: {
      const { authedUser, qid, answer } = action.vote
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
        }
      }
    }
    default:
      return state
  }

}

export default questions