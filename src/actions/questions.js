import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const VOTE_QUESTION = 'VOTE_QUESTION'

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
})

const saveQuestion = (question) => ({
  type: SAVE_QUESTION,
  question
})

const voteQuestion = (vote) => ({
  type: VOTE_QUESTION,
  vote
})

export const handleGetQuestions = () => {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
    })
  }
}

export const handleSaveQuestion = (question) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return _saveQuestion({ ...question, author: authedUser }).then((res) => dispatch(saveQuestion(res))).catch((e) => console.log('There was a problem saving your question', e))
  }
}

export const handleVoteQuestion = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return _saveQuestionAnswer({ authedUser, qid, answer }).then((res) => dispatch(voteQuestion({ authedUser, qid, answer }))).catch((e) => console.log('There was a problem saving your question', e))
  }
}