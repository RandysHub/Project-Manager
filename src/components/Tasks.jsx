import { forwardRef } from "react"
import NewTask from "./NewTask"

const Tasks = forwardRef(({ addTask, currentProject }, ref) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="text-stone-800 my-4">
        This Project does not have any tasks yet
      </p>
      <NewTask ref={ref} label='New Task' type='text' addTask={addTask} />

      <ul>
        {currentProject.tasks.map((task) => <li>{task}</li>)}
      </ul>
    </section>
  )
})

export default Tasks
