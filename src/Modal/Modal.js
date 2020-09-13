import React from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'

const Modal = ({ content, toggleDisplay }) => {
  return (
    <section className='modal'>
      <button onClick={toggleDisplay}>X</button>
      {content || <p data-testid='no-content'>Sorry, no content at this time.  Please try again.</p>}
    </section>
  )
}

export default Modal

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  toggleDisplay: PropTypes.func.isRequired
}