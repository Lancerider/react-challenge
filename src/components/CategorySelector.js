import React from 'react'

import { JOBS_CATEGORIES } from '../config/jobs'

function CategorySelector({ changeHandler }) {
  return (
    <select
      className="jobs-list__select"
      onChange={(event) => {
        changeHandler(event.target.value)
      }}
    >
      <option value="default">{JOBS_CATEGORIES.default.title}</option>
      {Object.values(JOBS_CATEGORIES).map((job) =>
        job.id !== 'default' ? (
          <option key={job.id} value={job.id}>
            {job.title}
          </option>
        ) : (
          ''
        )
      )}
    </select>
  )
}

export default CategorySelector
