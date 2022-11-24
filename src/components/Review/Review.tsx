/** @jsxImportSource @emotion/react */
import React, { useContext, useState, useCallback, useMemo } from 'react'
import { Grid, Modal } from 'antd'
import { Rate, Comments } from 'src/components'
import { AppRedux } from 'src/App'
import { reviewContainer } from './styles'

const { useBreakpoint } = Grid

const Review = () => {
  const screens = useBreakpoint()
  const {
    state: { reviews },
  } = useContext(AppRedux)

  const isMobile = useMemo(() => !!screens.xs, [screens.xs])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <div css={reviewContainer}>
      <div className="review-header-container">
        <div className="header">Reviews</div>
        <Rate />
      </div>
      {isMobile ? (
        <ins className="see-more-reviews" onClick={showModal}>
          See more reviews
        </ins>
      ) : (
        <Comments reviews={reviews} isMobile={isMobile} />
      )}
      <Modal
        title="Reviews"
        open={isModalOpen}
        onCancel={closeModal}
        footer={[]}
      >
        <Comments reviews={reviews} isMobile={isMobile} />
      </Modal>
    </div>
  )
}

export default Review
