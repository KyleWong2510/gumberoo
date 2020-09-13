import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render a button and some content', () => {
    const mockContent = <p>Content</p>
    const { getByText, getByRole } = render(<Modal content={mockContent}/>)

    const content = getByText('Content')
    const button = getByRole('button')

    expect(content).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should fire a function on click of the button', () => {
    const mockClose = jest.fn()
    const { getByRole } = render(<Modal toggleDisplay={mockClose}/>)
    
    const button = getByRole('button')
    fireEvent.click(button)
    
    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('should render a message when no content is passed', () => {
    const { getByTestId } = render(<Modal />)
    const noContent = getByTestId('no-content')

    expect(noContent).toBeInTheDocument()
  })

  // it should throw an error if no fn is passed
})