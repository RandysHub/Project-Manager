const Project = ({ currentProject }) => {
  return (
    <div>
      <h2>{currentProject.name}</h2>
      <h4>{currentProject.dueDate}</h4>
      <p>{currentProject.description}</p>
    </div>
  )
}

export default Project 
