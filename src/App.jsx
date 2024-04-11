import React, { useState } from 'react'
import SideBar from "./components/SideBar";
import ProjectForm from './components/ProjectForm';
import Project from './components/Project';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projects, setProjects] = useState([]);
  const [content, setContent] = useState('none');
  const [currentProject, setCurrentProject] = useState();

  let display;

  function handleDelete() {
    setProjects(projects.filter(project => project.id !== currentProject.id))
  }


  if (content === 'creating') {
    display = <ProjectForm projects={projects} setProjects={setProjects} setContent={setContent} />
  } else if (content === 'show') {
    display = <Project currentProject={currentProject} setCurrentProject={setCurrentProject} handleDelete={handleDelete} />
  } else {
    display = <NoProjectSelected setContent={setContent} />
  }




  return (
    <main className="h-screen my-8 flex gap-8" >
      <SideBar projects={projects} setContent={setContent} setCurrentProject={setCurrentProject} currentProject={currentProject} content={content} />
      {display}
    </main>
  );
}

export default App;
