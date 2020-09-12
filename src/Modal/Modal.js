import React from 'react'
import './Modal.scss'

const Modal = ({ content, toggleDisplay }) => {
  return (
    <section className='modal'>
      <button onClick={toggleDisplay}>X</button>
      {content}
    </section>
  )
}

export default Modal