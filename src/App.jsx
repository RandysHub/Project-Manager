import React, { useState } from 'react'
import SideBar from "./components/SideBar";
import ProjectForm from './components/ProjectForm';
import Project from './components/Project';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projects, setProjects] = useState([{}]);
  const [creatingProject, setCreatingProject] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  return (
    <main className="h-screen my-8 flex gap-8" >
      <SideBar projects={projects} setCreatingProject={setCreatingProject} setCurrentProject={setCurrentProject} currentProject={currentProject} />
      {creatingProject && <ProjectForm projects={projects} setProjects={setProjects} setCreatingProject={setCreatingProject} />}
      {currentProject && <Project currentProject={currentProject} setCurrentProject={setCurrentProject} />}
      {!creatingProject && !currentProject && <NoProjectSelected setCreatingProject={setCreatingProject} />}
    </main>
  );
}

export default App;
