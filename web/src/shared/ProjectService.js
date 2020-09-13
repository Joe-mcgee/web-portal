import axios from 'axios'


export async function getProjects() {
  const url = process.env.NODE_ENV === 'development' ?
    'http://localhost:1337' : 'http://localhost:1337'
    return await axios.get(`${url}/projects`)
}
