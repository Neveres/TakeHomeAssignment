import React from 'react'
import { Row, Grid, Rate } from 'antd'

const { useBreakpoint } = Grid

const style = { marginBottom: '7px', fontWeight: 700, fontSize: '16px' }

const Review = () => {
  const screens = useBreakpoint()

  return (
    <>
      <Row style={style}>Reviews </Row>
      <Row>
        <Rate />
      </Row>
      {screens.xs && <Row>See more revies</Row>}
    </>
  )
}

export default Review
