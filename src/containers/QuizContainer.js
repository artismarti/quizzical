import React, { Component } from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import QuestionCard from '../components/QuestionCard'

class QuizContainer extends Component {
  fnGetQuestions = () => {
    this.props.categoryQuestions.then(questions =>
      questions.results.map(q => {
        return <QuestionCard questions={q} />
      })
    )
  }
  render() {
    console.log('Hello')
    return (
      <Container fluid>
        <Header as="h2">Your time starts now...</Header>
        <Card.Group>{this.fnGetQuestions()}</Card.Group>
        <Card>{this.fnGetQuestions()}</Card>
      </Container>
    )
  }
}

export default QuizContainer
