import { useState } from 'react'
import { connect } from 'react-redux'
import { Card, Header, Form, Image } from 'semantic-ui-react'
import logo from '../logo.svg'

import { setAuthedUser } from '../actions/authedUser'

const SignIn = ({ dispatch, users }) => {

  const [selectedUser, setSelectedUser] = useState();

  const userOptions = Object.keys(users).map((userId) => ({
    key: userId,
    value: userId,
    text: users[userId].name,
    image: { avatar: true, src: users[userId].avatarURL }
  }))

  const handleSelection = (e, test) => {
    setSelectedUser(test.value)
  }

  const handleSignIn = (e) => {
    dispatch(setAuthedUser(selectedUser))
  }

  return (
    <Card style={{ width: '500px' }}>
      <Card.Header textAlign='center'>
        <Header as='h3'>
          <Header.Content>
            Welcome to the Would You Rather App!
          </Header.Content>
          <Header.Subheader>
            Please sign in to continue
          </Header.Subheader>
        </Header>
      </Card.Header>
      <Card.Content textAlign='center'>
        <Form onSubmit={handleSignIn}>
          <Image src={logo} size='medium' />
          <h3>Sign In</h3>
          <Form.Select placeholder='Select user' options={userOptions} selection onChange={handleSelection} />
          <Form.Button fluid disabled={!selectedUser}>Sign In</Form.Button>
        </Form>
      </Card.Content>
    </Card >
  )
}

const mapStateToProps = ({ users }) => ({
  users
})

export default connect(mapStateToProps)(SignIn)