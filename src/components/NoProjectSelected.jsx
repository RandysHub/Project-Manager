const NoProjectSelected = ({ setCreatingProject }) => {
  return (
    <div>
      <img src='#' />
      <h2>No Project Selected</h2>
      <p>Select a project or get start with a new one</p>
      <button onClick={() => setCreatingProject(true)} >Create New Project</button>
    </div>
  )
}

export default NoProjectSelected;
