import React, { useState, useEffect } from 'react'
import JobItem from '../components/JobItem'
import { getAllJobs } from '../utils/getJobs'

const JobsContainer = () => {
  
  const [jobs, setJobs] = useState([])
  const [selectedJobs, setSelectedJobs] = useState([])
  const [selectedJobsTotal, setSelectedJobsTotal] = useState(0)
  const [category, setCategory] = useState(0)

  const getJobs = async () => {
    const fetchedJobs = await getAllJobs()
    console.log("Console log : getJobs -> fetchedJobs", fetchedJobs)
    setJobs(fetchedJobs)
    setSelectedJobs(fetchedJobs)
    setSelectedJobsTotal(fetchedJobs.length)
    setCategory('all')
  }

  useEffect(() => {
    getJobs()
  }, [])

  const jobsTotal = 4
  return (
    <div className="jobs-list">
      <div className="jobs-list__header">
        <div className="jobs-list__title">{`Jobs list (${jobsTotal})`}</div>
        <select className="">
          <option value="all">All jobs</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
        </select>
      </div>
      <div className="jobs-list__results">
        {jobs.length > 0 ? jobs.map((job) => (
          <JobItem key={job.id} jobData={job} />
        ))
          : <div>No items</div>}
      </div>
    </div>
  )
}

export default JobsContainer
