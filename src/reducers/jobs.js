const jobsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return action.jobs
    default:
      return state
  }
}

export default jobsReducer