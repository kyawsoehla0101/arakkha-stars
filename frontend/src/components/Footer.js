import React from 'react'
import Layout from './Layout'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div style={{height:'120px'}} className='bg-custom py-5 px-5'>
        <div className='text-white'>
            <Row>
                <Col lg={4}>Hello World</Col>
                <Col lg={4}>Hello World</Col>
                <Col lg={4}>Hello World</Col>
            </Row>
        </div>
    </div>
  )
}

export default Footer