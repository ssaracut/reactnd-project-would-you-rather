import { useState } from 'react'
import { Header, Form } from 'semantic-ui-react'

const AnswerSubmit = ({ optionOneText, optionTwoText, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState()

  return (
    <Form onSubmit={() => onSubmit(selectedOption)}>
      <Form.Field>
        <Header as='h2'>
          Would You Rather...
      </Header>
      </Form.Field>
      <Form.Checkbox
        radio
        label={optionOneText}
        name='optionRadioGroup'
        value='optionOne'
        checked={selectedOption === 'optionOne'}
        onChange={(e, { value }) => setSelectedOption(value)} />
      <Form.Checkbox
        radio
        label={optionTwoText}
        name='optionRadioGroup'
        value='optionTwo'
        checked={selectedOption === 'optionTwo'}
        onChange={(e, { value }) => setSelectedOption(value)} />
      <Form.Button fluid disabled={!selectedOption}>Submit</Form.Button>
    </Form>
  )
}

export default AnswerSubmit