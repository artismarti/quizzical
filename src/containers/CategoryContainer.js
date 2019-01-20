import React, { Component } from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import CategoryCard from '../components/CategoryCard'
import categories from '../CategoryData'

class CategoryContainer extends Component {
  // Choose Category when card is clicked
  handleCategorySelect = (e, data) => {
    this.props.chooseCategory(
      data.children[0].props.children._owner.memoizedProps.id
    )
  }

  render() {
    return (
      <Container fluid>
        <Header as="h2" textAlign="center">
          Let's Get Quizzical
        </Header>
        <Card.Group>
          {categories.map(category => {
            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                category={category}
                handleCategorySelect={this.handleCategorySelect}
              />
            )
          })}
        </Card.Group>
      </Container>
    )
  }
}

export default CategoryContainer
