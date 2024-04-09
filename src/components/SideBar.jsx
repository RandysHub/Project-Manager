import React, { useState } from 'react'

export default function SideBar({ projects }) {


  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1>Your Projects</h1>
      <button>Add Project</button>
      <ul>
        {projects.map((project) => <li>{project.name}</li>)}
      </ul>
    </aside>
  )
}
