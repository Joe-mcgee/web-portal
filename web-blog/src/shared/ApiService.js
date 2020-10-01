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

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export async function getPosts(params) {
  params = params ? {params} : {}
  console.log(params)
  const response = await axios.get(`${getUrl()}/posts`, params)
  response.data = response.data.map((post) => {
    post.logo.url = `${getUrl()}${post.logo.url}`
    post.created_at = timeSince(new Date(post.created_at))
    post.categories.map((category) => {
      category.logo.url = `${getUrl()}${category.logo.url}`
    })
    return post

  })
  return response.data
}


export async function getPost(id) {
  const response = await axios.get(`${getUrl()}/posts/${id}`)
  response.data.logo.url = `${getUrl()}${response.data.logo.url}`
  response.data.created_at = timeSince(new Date(response.data.created_at))
    response.data.categories.map((category) => {
      category.logo.url = `${getUrl()}${category.logo.url}`
    })
  return response.data
}

export async function getCategories(params) {
  params = params ? {params} : {}
  console.log(params)
  const response = await axios.get(`${getUrl()}/categories`, params)
  response.data = response.data.map((category) => {
    category.logo.url = `${getUrl()}${category.logo.url}`
    category.created_at = timeSince(new Date(category.created_at))
    return category

  })
  return response.data
}


export async function getCategory(id) {
  const response = await axios.get(`${getUrl()}/categories/${id}`)
  response.data.logo.url = `${getUrl()}${response.data.logo.url}`
  response.data.created_at = timeSince(new Date(response.data.created_at))
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

