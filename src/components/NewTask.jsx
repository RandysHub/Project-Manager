import { forwardRef } from "react"

const NewTask = forwardRef(function NewTask({ addTask, ...props }, ref) {
  return (
    <div className="flex items-center gap-4">
      <input {...props} ref={ref} className="w-64 px-2 py-1 rounded-sm bg-stone-200
        "/>
      <button className="text-stone-700 hover:text-stone-950" onClick={addTask} >Add Task</button>
    </div>
  )
})

export default NewTask
