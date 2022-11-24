export = Yahoo
export as namespace Yahoo

declare namespace Yahoo {
  declare namespace AppRedux {
    interface Review {
      name: string
      rate: number
      date: string
      comment: string
      images?: string[]
      [index: string]: any
    }

    type State = {
      reviews: Review[]
    }

    type Action = {
      type: string
      review: Review
    }

    type Actions = {
      addReview(review: Review): void
    }
  }
}
