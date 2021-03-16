import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect, Fragment } from 'react';
import { Grid } from 'semantic-ui-react'
import handleInitialData from '../actions/shared'

import Nav from './Nav'
import SignIn from './SignIn'
import LeaderBoardList from './LeaderBoardList'
import CreateQuestion from './CreateQuestion'
import QuestionsContainer from './QuestionsContainer'
import QuestionContainer from './QuestionContainer';

const App = ({ dispatch, loading, authedUser }) => {

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <Nav />
      <Grid textAlign='center'>
        <Grid.Row >
          {
            //!loading &&
            !authedUser ?
              < SignIn /> :
              <Fragment>
                <Route path='/' exact component={QuestionsContainer} />
                <Route path='/add' component={CreateQuestion} />
                <Route path='/leaderboard' component={LeaderBoardList} />
                <Route path='/questions/:question_id' component={QuestionContainer} />
              </Fragment>
          }
        </Grid.Row>
      </Grid>
    </Router >
  );
}

const mapStateToProps = ({ loading, authedUser }) => ({
  loading,
  authedUser
})

export default connect(mapStateToProps)(App);
