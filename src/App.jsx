import React, { useState } from 'react'
import SideBar from "./components/SideBar";
import ProjectForm from './components/ProjectForm';
import Project from './components/Project';

function App() {
  const [projects, setProjects] = useState([{}]);

  return (
    <main className="h-screen my-8 flex gap-8" >
      <SideBar projects={projects} />
      <ProjectForm projects={projects} setProjects={setProjects} />
      <Project />
    </main>
  );
}

export default App;
