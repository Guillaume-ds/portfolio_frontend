import axios from 'axios'
import {backendUrl} from './urls'

export default async function getProjects() {
  const projects = await axios.get(backendUrl+"/projects/")
  return projects.data
}

export async function filterProjects(tags=[],language=[],keywords="",slug=null) {
  let headers = {
    "content-type":"application-json"
  }
  let body = {
    "language": language,
    "tags":tags,
    "keywords":keywords,
    "slug":slug
  }

  const projects = await axios.post(backendUrl+"/projects/",body,headers)
  return projects.data
}

export const languageList = [
  "python",
  "javascript",
  "sql"
]

export const tagsList = [
  "web development",
  "data science",
  "blockchain"
]