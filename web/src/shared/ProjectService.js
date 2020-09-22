import axios from 'axios'

export function getUrl() {
  return process.env.NODE_ENV === 'development' ?
    `http://${process.env.VUE_APP_STRAPI}` : `https://${process.env.VUE_APP_STRAPI}`
}

export async function getProjects() {
  const response = await axios.get(`${getUrl()}/projects`)
  response.data = response.data.map((project) => {
    project.logo.url = `${getUrl()}${project.logo.url}`
    return project

  })
  return response.data
}


export async function getProject(id) {
  const response = await axios.get(`${getUrl()}/projects/${id}`)
  return response.data
}


