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
  console.log(product)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}></Col>
        <Col></Col>
      </Row>
    </>
  )
}

export default ProductPage
