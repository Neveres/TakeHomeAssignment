/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react'
import { Rate } from 'antd'
import { commentsContainer } from './styles'

interface IComments {
  isMobile: boolean
  reviews: Yahoo.AppRedux.Review[]
}

const Comments: React.FC<IComments> = ({ isMobile, reviews }) => {
  const lastIndexOfReviews = useMemo(() => reviews.length - 1, [reviews.length])

  return (
    <div css={commentsContainer}>
      {reviews.map(({ name, rate, comment, date, images }, index) => (
        <div
          className="comment-container"
          key={index}
          style={{
            borderBottom: index === lastIndexOfReviews ? 0 : '1px solid black',
          }}
        >
          <div
            className="comment-header"
            style={isMobile ? { marginBottom: 0 } : {}}
          >
            <div>
              {name}&ensp;
              {!isMobile && <Rate value={rate} disabled />}
            </div>
            <div className="comment-date">{date}</div>
          </div>
          {isMobile && <Rate value={rate} disabled />}
          <div className="comment-content">{comment}</div>
          <div>
            {images?.map((image, index) => (
              <img className="comment-pic" key={index} src={image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comments
