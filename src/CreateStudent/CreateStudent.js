import React from 'react'
import './CreateStudent.scss'

const CreateStudent = () => {
  const [studentFirstName, setStudentFirstName] = useState('')
  const [studentLastName, setStudentLastName] = useState('')

  return (
    <section className='create-student'>
      <input 
        type='text'
        placeholder='Enter Student First Name...'
        value={studentFirstName}
        onChange={(e) => setStudentFirstName(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Enter Student Last Name...'
        value={studentLastName}
        onChange={(e) => setStudentLastName(e.target.value)}
      />
      <button>Add Student</button>
    </section>
  )
}

export default CreateStudent