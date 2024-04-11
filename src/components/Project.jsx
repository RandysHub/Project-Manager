import { useRef } from "react"
import Input from "./Input";
import Button from "./Button";

const Project = ({ currentProject, setCurrentProject }) => {
  const input = useRef();

  const formattedDate = new Date(currentProject.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

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
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2  border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{currentProject.name}</h1>
          <button className="text-stone-500 hover:text-stone-950">Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{currentProject.description}</p>
      </header>
      <div>
        <Input ref={input} label='New Task' type='text' />
        <button onClick={addTask} >Add Task</button>
        {currentProject.tasks.map((task) => <h4>{task}</h4>)}
      </div>
    </div>
  )
}

export default Project
