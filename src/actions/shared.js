import { handleGetQuestions } from './questions'
import { handleGetUsers } from './users'

export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export const toggleLoading = (loading) => ({
  type: TOGGLE_LOADING,
  loading
})

const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([
      dispatch(handleGetQuestions()),
      dispatch(handleGetUsers())
    ]).then(() => dispatch(toggleLoading(false)))
  }
}

export default handleInitialData