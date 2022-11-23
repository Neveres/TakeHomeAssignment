import React from 'react'
import { Col, Row, Select, Button, Grid } from 'antd'
import { Rate } from 'src/components'

const { useBreakpoint } = Grid

const options = Array(5)
  .fill(0)
  .map((element, index) => ({
    value: index + 1,
    label: index + 1,
  }))

const style = { marginBottom: '7px', fontWeight: 800, fontSize: '16px' }

const Product = () => {
  const screens = useBreakpoint()

  return (
    <Row gutter={[32, 16]} style={{ marginBottom: '25px' }}>
      <Col xs={24} sm={5} md={5} lg={5}>
        <img
          style={{ width: '100%' }}
          src="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
        />
      </Col>
      <Col xs={24} sm={19} md={19} lg={19}>
        <div style={style}>An apple a day keeps the doctor away</div>
        <div style={{ ...style, fontWeight: 500 }}>
          <Rate />
        </div>
        <div style={style}>$ 55.66</div>
        <div style={{ ...style, marginBottom: '25px', fontWeight: 500 }}>
          Qty:&ensp;
          <Select defaultValue="1" style={{ width: 120 }} options={options} />
        </div>
        <Button
          size="large"
          shape="round"
          style={{
            width: screens.xs ? '95%' : '215px',
            marginBottom: '25px',
            fontSize: '12px',
          }}
        >
          Add to cart
        </Button>
      </Col>
    </Row>
  )
}

export default Product
