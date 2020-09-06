import React, { useState, useEffect } from 'react'

import JobsList from '../components/JobsList'
import Loader from '../components/Loader'
import CategorySelector from '../components/CategorySelector'

import { getAllJobs } from '../utils/getJobs'
import { JOBS_CATEGORIES } from '../config/jobs'

const JobsContainer = () => {
  const [jobs, setJobs] = useState([])
  const [selectedJobs, setSelectedJobs] = useState([])
  const [selectedJobsTotal, setSelectedJobsTotal] = useState(0)
  const [category, setCategory] = useState(JOBS_CATEGORIES.default.id)
  const [isLoading, setIsLoading] = useState(false)

  const getJobs = async () => {

    try {
      const fetchedJobs = await getAllJobs()
      setJobs(fetchedJobs)
      setSelectedJobs(fetchedJobs)
      setSelectedJobsTotal(fetchedJobs.length)
      localStorage.setItem('jobs', fetchedJobs)
    } catch (error) {
      console.error(error)
      const jobsInLocalStorage = localStorage['jobs']

      setJobs(jobsInLocalStorage || [])
    }

    setIsLoading(false)
  }

  const removeJob = (id) => {
    const remainingJobs = selectedJobs.filter((job) => job.id !== id)
    setSelectedJobs(remainingJobs)
    setSelectedJobsTotal(selectedJobsTotal - 1)
  }

  const changeCategory = (category) => {
    setCategory(category)
    if (category === JOBS_CATEGORIES.default.id) {
      setSelectedJobs(jobs)
      setSelectedJobsTotal(jobs.length)
      return
    }

    const jobsInCategory = jobs.filter((job) => job.category.name === category)
    setSelectedJobsTotal(jobsInCategory.length)
    setSelectedJobs(jobsInCategory)
  }

  useEffect(() => {
    setIsLoading(true)
    getJobs()
  }, [])

  const getListTitle = (category) =>
    category !== JOBS_CATEGORIES.default.id
      ? `${JOBS_CATEGORIES[category].title} Jobs`
      : 'Jobs'

  return (
    <div className="jobs-list">
      <div className="jobs-list__header">
        <div className="jobs-list__title">
          {`${getListTitle(category)} (${selectedJobsTotal})`}
        </div>
        <CategorySelector changeHandler={changeCategory}/>
      </div>
      {isLoading ? (
        <div className="container"><Loader /></div>
      ) : (
        <JobsList removeJob={removeJob} selectedJobs={selectedJobs} />
      )}
    </div>
  )
}

export default JobsContainer
