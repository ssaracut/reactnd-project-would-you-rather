import { Card, Image, Grid, Divider, Label } from 'semantic-ui-react'

const LeaderBoardListItem = ({ name, avatarURL, numAnswers, numQuestions }) => {

  return (
    <Card style={{ width: '500px' }}>
      <Card.Content>
        <Label as='span' corner='left' icon='trophy' size='mini' />
        <Grid columns={3} divided verticalAlign='middle'>
          <Grid.Column width={4}>
            <Image src={avatarURL} circular size='small' />
          </Grid.Column>
          <Grid.Column textAlign='left' width={9}>
            <h3>{name}</h3>
            <Grid>
              <Grid.Column floated='left' width={13}>
                <p>Answered questions</p>
              </Grid.Column>
              <Grid.Column floated='right' width={3}>
                <p>{numAnswers}</p>
              </Grid.Column>
            </Grid>
            <Divider></Divider>
            <Grid>
              <Grid.Column floated='left' width={13}>
                <p>Created questions</p>
              </Grid.Column>
              <Grid.Column floated='right' width={3}>
                <p>{numQuestions}</p>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card>
              <Card.Header textAlign='center'>
                Score
              </Card.Header>
              <Card.Content textAlign='center'>
                <Label circular size='huge'>
                  {numAnswers + numQuestions}
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )

}

export default LeaderBoardListItem