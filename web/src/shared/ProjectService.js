import axios from 'axios'


export async function getProjects() {
  const url = process.env.NODE_ENV === 'development' ?
    `http://${process.env.VUE_APP_STRAPI}` : `https://${process.env.VUE_APP_STRAPI}`
  const response = await axios.get(`${url}/projects`)
  return response.data
}
