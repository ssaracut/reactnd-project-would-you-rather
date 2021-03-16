import { Fragment } from "react"
import { Header } from 'semantic-ui-react'

import AnswerResult from './AnswerResult'

const AnswerResultList = ({ optionOneVotes, optionOneText, votedOne, optionTwoVotes, optionTwoText, votedTwo, totalVotes }) => {

  return (
    <Fragment>
      <Header as='h2'>Results:</Header>
      <AnswerResult
        voted={votedOne}
        optionText={optionOneText}
        votes={optionOneVotes}
        totalVotes={totalVotes}
      />
      <AnswerResult
        voted={votedTwo}
        optionText={optionTwoText}
        votes={optionTwoVotes}
        totalVotes={totalVotes}
      />
    </Fragment>
  )

}

export default AnswerResultList