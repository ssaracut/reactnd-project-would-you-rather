import { connect } from 'react-redux'
import { useState } from 'react'
import { Card, Form, Divider } from 'semantic-ui-react'
import { handleSaveQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

const CreateQuestion = ({ history, dispatch }) => {

  const initOptions = { opt1: '', opt2: '' }
  const [options, setOptions] = useState(initOptions)

  const handleSubmit = () => {
    console.log('submitted options', options)
    setOptions(initOptions)
    dispatch(handleSaveQuestion({ optionOneText: options.opt1, optionTwoText: options.opt2 }))
      .then(() => history.push('/'))
  }

  return (
    <Card style={{ width: '500px' }}>
      <Card.Header textAlign='center'>
        <h2>Create New Question</h2>
      </Card.Header>
      <Card.Content>
        <p>Complete the question:</p>
        <h2>Would you rather....</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Input onChange={(e) => setOptions({ ...options, opt1: e.target.value })} value={options.opt1} />
          <Divider horizontal>OR</Divider>
          <Form.Input onChange={(e) => setOptions({ ...options, opt2: e.target.value })} value={options.opt2} />
          <Form.Button fluid disabled={options.opt1.length === 0 || options.opt2.length === 0}>Submit</Form.Button>
        </Form>
      </Card.Content>
    </Card>
  )

}

export default withRouter(connect()(CreateQuestion))