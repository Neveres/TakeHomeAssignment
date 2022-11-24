/** @jsxImportSource @emotion/react */
import React, { useMemo, useContext } from 'react'
import { Row, Grid, Rate as RateFromAnt } from 'antd'
import { Rate } from 'src/components'
import { AppRedux } from 'src/App'
import { reviewContainer } from './styles'

const { useBreakpoint } = Grid

const Review = () => {
  const screens = useBreakpoint()
  const {
    state: { reviews },
  } = useContext(AppRedux)

  const lastIndexOfReviews = useMemo(() => reviews.length - 1, [reviews.length])

  const Comments = useMemo(
    () =>
      reviews.map(({ name, rate, comment, date, images }, index) => (
        <div
          className="comment-container"
          key={`${name}-${rate}-${date}`}
          style={{
            borderBottom: index === lastIndexOfReviews ? 0 : '1px solid black',
          }}
        >
          <div className="comment-header">
            <div>
              {name}&ensp;
              <RateFromAnt value={rate} disabled />
            </div>
            <div className="comment-date">{date}</div>
          </div>
          <div className="comment-content">{comment}</div>
          <div>
            {images?.map((image) => (
              <img className="comment-pic" key={image} src={image} />
            ))}
          </div>
        </div>
      )),
    [lastIndexOfReviews, reviews],
  )

  return (
    <div css={reviewContainer}>
      <div className="review-header-container">
        <div className="header">Reviews</div>
        <Rate />
      </div>
      {screens.xs ? <Row>See more reviews</Row> : Comments}
    </div>
  )
}

export default Review
