import { useRef } from "react"
import Tasks from "./Tasks";

const Project = ({ projects, setProjects, currentProject, setCurrentProject, handleDelete }) => {

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
        tasks: [...currentProject.tasks, input.current.value]
      }
    })
    syncState();
    console.log(currentProject.tasks);
  }


  function syncState() {
    setProjects(() => {
      let newArray = projects.filter((proj) => proj.id !== currentProject.id)
      newArray.push(currentProject);
      console.log(projects)
      return newArray;
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2  border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{currentProject.name}</h1>
          <button onClick={handleDelete} className="text-stone-500 hover:text-stone-950">Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{currentProject.description}</p>
      </header>
      <Tasks ref={input} addTask={addTask} currentProject={currentProject} />
    </div>
  )
}

export default Project
