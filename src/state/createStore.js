import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state
    default:
      return state
  }
}

const initialState = false

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
