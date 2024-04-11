import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

const ProjectForm = function ProjectForm({ projects, setProjects, setContent }) {


  const name = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();


  function handleSave(e) {

    if (name.current.value.trim() === '' || description.current.value.trim() === '' || dueDate.current.value.trim() === '') {
      modal.current.open();
      return;
    }
    e.preventDefault();
    setProjects([...projects, {
      name: name.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      id: Math.random(),
      tasks: []
    }])
    setContent('none');
  }

  console.log(projects);


  return (
    <>
      <Modal ref={modal} buttonLabel='Okay'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops looks like you forgot to enter a value.</p>
        <p className='text-stone-600 mb-4'>Please make sure you input a valid value for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16  '>
        <menu className='flex  items-center justify-end gap-4 my-4'>
          <li><button onClick={() => setContent('none')} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
          <li><button onClick={handleSave} className=' px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
        </menu>
        <form>
          <Input ref={name} label={'Name'} type='text' />
          <Input ref={description} label={'Description'} type='text' textArea={true} />
          <Input ref={dueDate} label={'Due Date'} type='date' />
        </form>
      </div>
    </>
  )
}

export default ProjectForm;

// Form with:
// -Name
// -Description
// -Due Date
//
//
