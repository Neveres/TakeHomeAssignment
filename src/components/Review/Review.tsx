import React, { useMemo, useContext } from 'react'
import { Row, Grid, Rate as RateFromAnt } from 'antd'
import { Rate } from 'src/components'
import { AppRedux } from 'src/App'

const { useBreakpoint } = Grid

const style = { marginBottom: '7px', fontWeight: 500, fontSize: '16px' }

const Review = () => {
  const screens = useBreakpoint()
  const {
    state: { reviews },
  } = useContext(AppRedux)

  const lastIndexOfReviews = useMemo(() => reviews.length - 1, [reviews.length])

  const Reviews = useMemo(
    () =>
      reviews.map(({ name, rate, comment, date, images }, index) => (
        <div
          key={`${name}-${rate}-${date}`}
          style={{
            padding: '10px 0',
            borderBottom: index === lastIndexOfReviews ? 0 : '1px solid black',
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
    [lastIndexOfReviews, reviews],
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
