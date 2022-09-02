import axios from 'axios'
import {backendUrl} from './urls'

export default async function getProjects() {
  const projects = await axios.get(backendUrl+"/projects/")
  return projects.data
}

export async function filterProjects(tags=[],language=[],keywords="") {
  let headers = {
    "content-type":"application-json"
  }
  let body = {
    "language": language,
    "tags":tags,
    "keywords":keywords
  }
  const projects = await axios.post(backendUrl+"/projects/",body,headers)
  return projects.data
}

export const languageList = [
  "python",
  "react",
  "sql"
]

export const tagsList = [
  "web development",
  "data science",
  "data mining"
]