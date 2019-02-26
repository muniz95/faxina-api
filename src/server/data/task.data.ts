import db from '../config/db';
import Task from '../models/task.model';

const getAllTasks = () => db.get('tasks')
const getTask = (id: string) => db.get('tasks').find({id: parseInt(id)}).value()
const insertTask = (task: Task) => db.get('tasks').push(task).write()

export default {
  getAllTasks,
  getTask,
  insertTask
}