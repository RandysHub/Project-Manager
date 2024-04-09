import React, { useState } from 'react'

export default function SideBar() {
  const [projects, setProjects] = useState([{ name: "penis" }]);


  return (
    <aside>
      <h1>Your Projects</h1>
      <button>Add Project</button>
      <ul>
        {projects.map((project) => <li>{project.name}</li>)}
      </ul>

    </aside>
  )
}
