import React, { useMemo } from 'react'
import { Row, Grid, Rate as RateFromAnt } from 'antd'
import { Rate } from 'src/components'
import { reviews } from 'src/__mock__'

const { useBreakpoint } = Grid
const { length } = reviews
const LAST_INDEX_OF_REVIEWS = length - 1

const style = { marginBottom: '7px', fontWeight: 500, fontSize: '16px' }

const Review = () => {
  const screens = useBreakpoint()
  const Reviews = useMemo(
    () =>
      reviews.map(({ name, rate, comment, date, images }, index) => (
        <div
          key={`${name}-${rate}-${date}`}
          style={{
            padding: '10px 0',
            borderBottom:
              index === LAST_INDEX_OF_REVIEWS ? 0 : '1px solid black',
          }}
        >
          <div
            style={{
              ...style,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {name}&ensp;
              <RateFromAnt value={rate} />
            </div>
            <div>{date}</div>
          </div>
          <div style={{ ...style, fontSize: '12px' }}>{comment}</div>
        </div>
      )),
    [],
  )

  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <div style={{ ...style, fontWeight: 700 }}>Reviews </div>
        <Rate />
      </div>

      {screens.xs ? <Row>See more reviews</Row> : Reviews}
    </>
  )
}

export default Review
