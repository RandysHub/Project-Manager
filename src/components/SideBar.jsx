import React, { useState } from 'react'

export default function SideBar({ projects, currentProject, setCurrentProject }) {


  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div>
        {currentProject && <h3>{currentProject.name}</h3>}
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>Add Project</button>
      </div>
      <ul>
        {projects.map((project) => <li onClick={() => setCurrentProject(project)} >{project.name}</li>)}
      </ul>
    </aside>
  )
}
