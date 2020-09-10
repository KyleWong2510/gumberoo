import React from 'react'
import './Modal.scss'

const Modal = ({ content }) => {
  return (
    <section className='modal'>
      <button>X</button>
      {content}
    </section>
  )
}

export default Modal