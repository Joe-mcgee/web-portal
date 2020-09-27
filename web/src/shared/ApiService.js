import axios from 'axios'

export function getUrl() {
  return process.env.NODE_ENV === 'development' ?
    `http://${process.env.VUE_APP_STRAPI}` : `https://${process.env.VUE_APP_STRAPI}`
}

export async function getProjects() {
  const response = await axios.get(`${getUrl()}/projects`)
  response.data = response.data.map((project) => {
    project.logo.url = `${getUrl()}${project.logo.url}`
    project.categories.map((category) => {
      category.logo.url = `${getUrl()}${category.logo.url}`
      return category
    })
    return project

  })
  return response.data
}


export async function getProject(id) {
  const response = await axios.get(`${getUrl()}/projects/${id}`)
  return response.data
}


export async function getPosts() {
  const response = await axios.get(`${getUrl()}/posts`)
  response.data = response.data.map((blog) => {
    blog.logo.url = `${getUrl()}${blog.logo.url}`
    return blog

  })
  return response.data
}


export async function getPost(id) {
  const response = await axios.get(`${getUrl()}/posts/${id}`)
  return response.data
}

export async function getContacts() {
  const response = await axios.get(`${getUrl()}/contacts`)
  response.data = response.data.map((contact) => {
    contact.logo.url = `${getUrl()}${contact.logo.url}`
    return contact

  })
  return response.data
}


export async function getContact(id) {
  const response = await axios.get(`${getUrl()}/contacts/${id}`)
  return response.data
}

export async function getAbouts() {
  const response = await axios.get(`${getUrl()}/abouts`)
  response.data = response.data.map((contact) => {
    contact.logo.url = `${getUrl()}${contact.logo.url}`
    return contact

  })
  return response.data
}


export async function getAbout(id) {
  const response = await axios.get(`${getUrl()}/abouts/${id}`)
  return response.data
}

