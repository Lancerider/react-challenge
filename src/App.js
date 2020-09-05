import React, { useReducer, useEffect } from 'react'

import JobsContainer from './containers/JobsContainer'
import jobsReducer from './reducers/jobs'
import JobsContext from './context/jobs-context'
import { getAllJobs } from './utils/getJobs'

import './App.css'

export default function App() {
  const [jobs, jobDispatchers] = useReducer(jobsReducer, [])

  const getJobs = async () => {
    try {
      const jobsResponse = await getAllJobs()
      jobDispatchers({
        type: 'SET_JOBS',
        jobs: jobsResponse.data,
      })
      localStorage.setItem('jobs', jobsResponse)
    } catch (error) {
      console.log("Console log : getJobs -> error", error)
      const jobsInLocalStorage = localStorage['jobs']

      jobDispatchers({
        type: 'SET_JOBS',
        jobs: jobsInLocalStorage || [],
      })
    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <div className="App">
      <JobsContext.Provider value={(jobs, jobDispatchers)}>
        <JobsContainer />
      </JobsContext.Provider>
    </div>
  )
}
