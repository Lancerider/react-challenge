import React from 'react'

import JobItem from '../components/JobItem'

import '../assets/styles/components/jobsList.css'

function JobsList({selectedJobs, removeJob}) {
  return (
    <>
      {selectedJobs.length > 0 ? (
        <div className="jobs-list__results">
          {selectedJobs.map((job) => (
            <JobItem key={job.id} jobData={job} removeJob={removeJob} />
          ))}
        </div>
      ) : (
        <div className="container">
          <div class="jobs-list__no-item">No items</div>
        </div>
      )}
    </>
  )
}

export default JobsList
