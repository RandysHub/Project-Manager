import React, { useRef } from 'react'

export default function ProjectForm({ projects, setProjects }) {
  const inputStyling = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  const labelStyling = "text-sm font-bold uppercase text-stone-500"
  const buttonStyling = "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"

  const name = useRef();
  const description = useRef();
  const dueDate = useRef();


  function handleSave(e) {
    e.preventDefault();
    setProjects([...projects, {
      name: name.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    }])
  }

  console.log(projects);


  return (
    <form>
      <label className={labelStyling}>Name</label>
      <input ref={name} className={inputStyling} type='text' />
      <label className={labelStyling}>Description</label>
      <input ref={description} className={inputStyling} type='text' />
      <label className={labelStyling}>Due Date</label>
      <input ref={dueDate} className={inputStyling} type='date' />
      <button onClick={handleSave} className={buttonStyling}>Save</button>
      <button className={buttonStyling}>Cancel</button>
    </form>
  )
}


// Form with:
// -Name
// -Description
// -Due Date
//
//
