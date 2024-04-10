import { useRef } from "react"
import Input from "./Input";

const Project = ({ currentProject, setCurrentProject }) => {
  const input = useRef();


  function addTask() {
    setCurrentProject((proj) => {
      return {
        ...proj,
        tasks: [input.current.value, ...currentProject.tasks]
      }
    })
    console.log(currentProject);

  }
  return (
    <div>
      <h2>{currentProject.name}</h2>
      <h4>{currentProject.dueDate}</h4>
      <p>{currentProject.description}</p>

      <div>

        <Input ref={input} label='New Task' type='text' />
        <button onClick={addTask} >Add Task</button>
        {currentProject.tasks.map((task) => <h4>{task}</h4>)}
      </div>
    </div>
  )
}

export default Project
