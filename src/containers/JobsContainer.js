import React, { setState } from 'react'
import JobItem from '../components/JobItem'

const JobsContainer = () => {
  const jobsTotal = 4
  return (
    <div className="jobs-list">
      <div className="jobs-list__header">
        <div className="jobs-list__title">
          {`Jobs list (${jobsTotal})`}
        </div>
        <select className="">
          <option value="design">All jobs</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
        </select>
      </div>
      <div className="jobs-list__results">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </div>
  )
}

export default JobsContainer
