import React, { useMemo, useContext } from 'react'
import { Rate as RateFromAnt } from 'antd'
import { AppRedux } from 'src/App'

const Rate = () => {
  const {
    state: { reviews },
  } = useContext(AppRedux)

  const { length } = reviews
  const valueOfRate = useMemo(
    () =>
      Math.round(
        reviews.reduce((sum, review) => sum + review.rate, 0) / length,
      ),
    [reviews, length],
  )

  return (
    <div>
      <RateFromAnt
        style={{ marginRight: '5px' }}
        value={valueOfRate}
        disabled
      />
      <span>({length})</span>
    </div>
  )
}

export default Rate
