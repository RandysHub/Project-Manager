import React, { useState } from 'react'
import SideBar from "./components/SideBar";
import ProjectForm from './components/ProjectForm';

function App() {
  const [projects, setProjects] = useState([{}]);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <SideBar projects={projects} />
      <ProjectForm projects={projects} setProjects={setProjects} />
    </>
  );
}

export default App;
