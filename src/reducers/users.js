import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION, VOTE_QUESTION } from '../actions/questions'

const users = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case SAVE_QUESTION:
      const { author, id } = action.question
      return {
        ...state,
        [author]: { ...state[author], questions: [...state[author].questions, id] }
      }
    case VOTE_QUESTION: {
      const { authedUser, qid, answer } = action.vote
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    }
    default:
      return state
  }

}

export default users