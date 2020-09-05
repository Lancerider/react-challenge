import React, { useState, useEffect } from 'react'
import JobItem from '../components/JobItem'
import { getAllJobs } from '../utils/getJobs'
import { JOBS_CATEGORIES } from '../config/jobs'

const JobsContainer = () => {
  
  const [jobs, setJobs] = useState([])
  const [selectedJobs, setSelectedJobs] = useState([])
  const [selectedJobsTotal, setSelectedJobsTotal] = useState(0)
  const [category, setCategory] = useState(JOBS_CATEGORIES.default.id)

  const getJobs = async () => {
    const fetchedJobs = await getAllJobs()
    console.log("Console log : getJobs -> fetchedJobs", fetchedJobs)
    setJobs(fetchedJobs)
    setSelectedJobs(fetchedJobs)
    setSelectedJobsTotal(fetchedJobs.length)
    setCategory(JOBS_CATEGORIES.default.id)
  }

  const removeJob = (id) => {
    const remainingJobs = selectedJobs.filter(job => job.id !== id)
    setSelectedJobs (remainingJobs)
    setSelectedJobsTotal(selectedJobsTotal - 1)
  }

  const changeCategory = (category) => {
    setCategory(category)
    if (category === JOBS_CATEGORIES.default.id) {
      setSelectedJobs(jobs)
      setSelectedJobsTotal(jobs.length)
      return;
    }

    const jobsInCategory = jobs.filter(job => job.category.name === category)
    setSelectedJobsTotal(jobsInCategory.length)
    setSelectedJobs(jobsInCategory)
  }

  useEffect(() => {
    getJobs()
  }, [])

  const getListTitle = (category) => category !== JOBS_CATEGORIES.default.id ? `${JOBS_CATEGORIES[category].title} Jobs` : 'Jobs'

  return (
    <div className="jobs-list">
      <div className="jobs-list__header">
        <div className="jobs-list__title">
          {`${getListTitle(category)} (${selectedJobsTotal})`}
        </div>
        <select className="" onChange={(event) => {changeCategory(event.target.value)}}>
          <option value="default">{JOBS_CATEGORIES.default.title}</option>
          {
            Object.values(JOBS_CATEGORIES).map(
              job => job.id !== 'default'
              ? (<option key={job.id} value={job.id}>{job.title}</option>)
              : ''
            )
          }
        </select>
      </div>
      <div className="jobs-list__results">
        {jobs.length > 0 ? selectedJobs.map((job) => (
          <JobItem key={job.id} jobData={job} removeJob={removeJob}/>
        ))
          : <div className="">No items</div>}
      </div>
    </div>
  )
}

export default JobsContainer
