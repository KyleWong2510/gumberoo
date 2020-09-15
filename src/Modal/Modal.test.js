import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

let mockContent, mockToggleDisplay, modal

describe('Modal', () => {
  beforeEach(() => {
    mockContent = <p>Content</p>
    mockToggleDisplay = jest.fn()
    modal = (
      <Modal 
        content={mockContent}
        toggleDisplay={mockToggleDisplay}
      />
    )
  })

  it('should render a button and some content', () => {
    const mockContent = <p>Content</p>
    const { getByText, getByRole } = render(modal)

    const content = getByText('Content')
    const button = getByRole('button')

    expect(content).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should fire a function on click of the button', () => {
    const { getByRole } = render(modal)
    
    const button = getByRole('button')
    fireEvent.click(button)
    
    expect(mockToggleDisplay).toHaveBeenCalledTimes(1)
  })
})