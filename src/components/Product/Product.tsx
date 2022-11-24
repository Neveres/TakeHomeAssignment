/** @jsxImportSource @emotion/react */
import React from 'react'
import { Col, Row, Select, Button, Grid } from 'antd'
import { Rate } from 'src/components'
import { productContainer } from './styles'

const { useBreakpoint } = Grid
const options = Array(5)
  .fill(0)
  .map((element, index) => ({
    value: index + 1,
    label: index + 1,
  }))

const Product = () => {
  const screens = useBreakpoint()

  return (
    <Row gutter={[32, 16]} css={productContainer}>
      <Col xs={24} sm={5} md={5} lg={5}>
        <img
          className="product-pic"
          src="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
        />
      </Col>
      <Col xs={24} sm={19} md={19} lg={19}>
        <div className="product-title">
          An apple a day keeps the doctor away
        </div>
        <div className="product-rate">
          <Rate />
        </div>
        <div className="product-price">$ 55.66</div>
        <div className="product-qty">
          Qty:&ensp;
          <Select defaultValue="1" options={options} />
        </div>
        <Button
          className="add-to-cart"
          size="large"
          shape="round"
          style={{
            width: screens.xs ? '95%' : '215px',
          }}
        >
          Add to cart
        </Button>
      </Col>
    </Row>
  )
}

export default Product
