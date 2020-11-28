import React from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  Image,
} from "react-bootstrap"
import products from "../products"
import Rating from "../components/Rating"

function ProductPage({ match }) {
  const product = products.find(p => p._id === match.params.id)

  const {
    price,
    description,
    numReviews,
    image,
    rating,
    name,
    countInStock,
  } = product

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={image} alt={name} rounded fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={rating}
                text={`${numReviews} review${numReviews > 1 ? "s" : " "}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${price}</ListGroup.Item>
            <ListGroup.Item>Description : ${description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>{countInStock > 0 ? "In Stock" : "Out Of Stock:("}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button disabled={countInStock === 0} className='btn btn-block'>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
