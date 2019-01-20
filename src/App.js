import React, { Component } from 'react'
import './App.css'
import CategoryContainer from './containers/CategoryContainer'
import QuizContainer from './containers/QuizContainer'

class App extends Component {
  state = {
    // set state to show category by default
    visibleContainer: 'category',
    id: -1,
  }

  // Select the category for the Quiz
  chooseCategory = id => {
    this.setState({
      visibleContainer: 'quiz',
      id: id,
    })
  }

  // Fetch Quiz Questions
  fnShowQuizInCategory = id => {
    return fetch(
      `https://opentdb.com/api.php?amount=10&category=${id}&type=boolean`
    ).then(response => response.json())
  }

  render() {
    return (
      <div className="App">
        {this.state.visibleContainer === 'category' && (
          <CategoryContainer chooseCategory={this.chooseCategory} />
        )}
        {this.state.visibleContainer === 'quiz' && (
          <QuizContainer
            id={this.state.id}
            categoryQuestions={this.fnShowQuizInCategory(this.state.id)}
          />
        )}
      </div>
    )
  }
}

export default App
