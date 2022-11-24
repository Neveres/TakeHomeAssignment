import React, { createContext, useReducer, useMemo } from 'react'
import { Product, Review } from 'src/components'
import { reviews } from 'src/__mock__'

export const appReducer = (
  state: Yahoo.AppRedux.State,
  action: Yahoo.AppRedux.Action,
) => {
  const { reviews } = state
  const { type, review } = action

  switch (type) {
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...reviews, review],
      }
    default:
      return state
  }
}

const initAppState = {
  reviews,
}

export const AppRedux = createContext(
  {} as { state: Yahoo.AppRedux.State; actions: Yahoo.AppRedux.Actions },
)

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initAppState)

  const actions = useMemo(
    () => ({
      addReview(review: Yahoo.AppRedux.Review) {
        dispatch({ type: 'ADD_REVIEW', review })
      },
    }),
    [],
  )

  const appContext = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions],
  )

  return (
    <AppRedux.Provider value={appContext}>
      <div style={{ padding: '30px' }}>
        <Product />
        <Review />
      </div>
    </AppRedux.Provider>
  )
}

export default App
