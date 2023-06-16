import api from "../../http/api"

export class ADMTasks {

  static async getTask(id) {
    return await api.get(`/tasks/${id}`)
      .then(response => response.data)
  }
  /** =>
  { "id": ...,
  "category": "...",
  "difficulty": "...",
  "points": ...,
  "title": "...",
  "description": "...",
  "file": "(название файла)"}
   */

  static async addTask(taskInfo) {
    api.post('/tasks', taskInfo).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  static async changeTask(taskInfo) {
    console.log()
  }

  static async delTask(taskId) {
    console.log()
  }
}
