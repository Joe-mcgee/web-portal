import axios from 'axios'


export async function getProjects() {
  console.log(process.env)
  const url = process.env.NODE_ENV === 'development' ?
    `http://${process.env.VUE_APP_STRAPI}` : `http://${process.env.VUE_APP_STRAPI}`
    return await axios.get(`${url}/projects`)
}
