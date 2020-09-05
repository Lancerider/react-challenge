import React from 'react'

import programmingJobIcon from '../assets/images/programming.svg'
// import desingJobIcon from '../assets/images/design.svg'
import deleteJobIcon from '../assets/images/trash-icon.svg'

function JobItem() {
  return (
    <div className="jobs-list__item">
      <div className="job-list__item-content">
        <img className="jobs-list__icon" src={programmingJobIcon} alt="Job Logo" />
        <div>
          <div className="jobs-list__item-title">Programming job asdfasdf</div>
          <div className="jobs-list__metadata">Company name</div>
          <div className="jobs-list__metadata">1000US - 1500USD</div>
        </div>
      </div>
      <div className="job-list__actions">
        <button type="button">
          <img src={deleteJobIcon} alt="Remove Job" />
          Remove from list
        </button>
      </div>
    </div>
  )
}

export default JobItem
