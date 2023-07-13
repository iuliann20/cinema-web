import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import { MemoryRouter, useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Register component', () => {
  it('should navigate to home page when Register button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const registerButton = screen.getByText('Register');
    fireEvent.click(registerButton);

    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });

  it('should validate name input field', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText('Your Name');
    fireEvent.change(nameInput, { target: { value: 'John' } });

     expect(screen.getByLabelText('Your Name')).toHaveValue('John');
  });

  it('should navigate to home page when Register button is clicked and password different than re password', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const passwordInput = screen.getByLabelText('Password');
    const rePasswordInput = screen.getByLabelText('Repeat your password');
    fireEvent.change(passwordInput, { target: { value: 'Test' } });
    fireEvent.change(rePasswordInput, { target: { value: 'test' } });

    const registerButton = screen.getByText('Register');
    fireEvent.click(registerButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/home');
    expect(passwordInput.value).not.toBe(rePasswordInput.value);
  });
});
