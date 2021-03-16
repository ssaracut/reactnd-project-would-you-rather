import { Segment, Progress, Header, Label } from 'semantic-ui-react'

const AnswerResult = ({ voted, optionText, votes, totalVotes }) => {

  return (
    <Segment>
      {voted &&
        <Label color='yellow' floating circular>
          Your Vote
      </Label>
      }
      <Header as='h3' style={{ marginTop: '0' }}>{optionText}</Header>
      <Progress percent={Math.round((votes / totalVotes) * 100)} progress>
        {`${votes} out of ${totalVotes} votes`}
      </Progress>
    </Segment>
  )

}

export default AnswerResult