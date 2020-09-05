import React from 'react'

import programmingJobIcon from '../assets/images/programming.svg'
import desingJobIcon from '../assets/images/design.svg'
import deleteJobIcon from '../assets/images/trash-icon.svg'

function JobItem({jobData, removeJob}) {
  const { id, title, category, company, max_salary, min_salary } = jobData

  const getLogo = (category) => category === 'programming'
    ? programmingJobIcon
    : desingJobIcon

  return (
    <div className="jobs-list__item">
      <div className="job-list__item-content">
        <img className="jobs-list__icon" src={getLogo(category.name)} alt="Job Logo" />
        <div>
          <div className="jobs-list__item-title">{title}</div>
          <div className="jobs-list__metadata">{company.name}</div>
          <div className="jobs-list__metadata">{
            max_salary && min_salary ?(
              `${min_salary}USD - ${max_salary}USD`
              ) : ''
            }
          </div>
        </div>
      </div>
      <div className="job-list__actions">
        <button type="button" onClick={() => removeJob(id)}>
          <img src={deleteJobIcon} alt="Remove Job" />
          Remove from list
        </button>
      </div>
    </div>
  )
}

export default JobItem
