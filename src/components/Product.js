import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Product({ medId }) {
  const [medicine,setMedicine]=useState();
  return (
    <>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  )
}
