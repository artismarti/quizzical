import React from 'react'
import { Card } from 'semantic-ui-react'

const QuestionCard = props => {
  return (
    <React.Fragment>
      <Card color="blue">
        <Card.Content>
          <Card.Header>Question:</Card.Header>
          <Card.Description>{props.questions.question}</Card.Description>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}

export default QuestionCard
