import { Grid, Card, Header, Image } from 'semantic-ui-react'

const AnswerBox = ({ children, headerText, avatarURL }) => {

  return (
    <Card style={{ width: '500px' }}>
      <Card.Header>
        <Header as='h4' block>{headerText}</Header>
      </Card.Header>
      <Card.Content>
        <Grid divided>
          <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
            <Image circular size='small' src={avatarURL} />
          </Grid.Column>
          <Grid.Column width={11}>
            {children}
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )

}

export default AnswerBox