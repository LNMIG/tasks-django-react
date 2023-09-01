import { useEffect, useState } from "react"
import { getTasks } from "../api/getTasks"
import { taskCard as TaskCard} from "./TaskCard.jsx"


export function TasksList() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const result = await getTasks();
      setTasks(result.data);
    }
    loadTasks();
  }, []);

  return (
    <div className=" d-flex flex-column align-items-center">
      {tasks.map(task => (
      <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  )
}
