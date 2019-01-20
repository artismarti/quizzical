import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CategoryCard = props => {
  return (
    <React.Fragment>
      <Card color="orange" onClick={props.handleCategorySelect}>
        <Card.Content>
          <Card.Header>{props.category.name.toUpperCase()}</Card.Header>
        </Card.Content>
        <Image src={props.category.image} />
      </Card>
    </React.Fragment>
  )
}

export default CategoryCard
