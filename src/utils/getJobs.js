const GETONBOARD_BASE_URL = 'https://www.getonbrd.com/api/v0/categories/'

export const getAllJobs = async () => {
  const programmingJobs = await getJobs('programming')
  const designJobs = await getJobs('design-ux')

  const allJobs = [...programmingJobs, ...designJobs]
  

  return allJobs.map((job, index) => ({ ...job, id: index }))
}

// TODO: Should accept an categories array
export const getJobs = async (categorie, amount = 12, page = 1) => {
  const responseJobs = await fetch(
    GETONBOARD_BASE_URL +
      `${categorie}/jobs?per_page=${amount}&page=${page}&expand=["company"]`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' },
    }
  )
  const jobsData = await responseJobs.json()

  const jobsFormatted = jobsData.data.map((job, index) => ({
    id: index,
    title: job.attributes.title,
    min_salary: job.attributes.min_salary,
    max_salary: job.attributes.max_salary,
    category: { name: categorie, title: job.attributes.category_name },
    company: { name: job.attributes.company.data.attributes.name },
  }))

  return jobsFormatted
}
