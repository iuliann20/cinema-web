import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import routes from '../../utils/routes';

describe('Login component', () => {
    it('should navigate to register page when "Don\'t have an account? Sign Up" button is clicked', () => {

        render(
            <MemoryRouter initialEntries={['/home']}>
                <Login />
            </MemoryRouter>
        );

        const signUpLink = screen.getByText("Don't have an account? Sign Up");
        expect(signUpLink.getAttribute('href')).toBe(routes.register);
    });
});