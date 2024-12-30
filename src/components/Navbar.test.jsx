import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Navbar from './Navbar';

describe('Navbar Component', () => {
    it('renders the navbar', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText(/My Portfolio/i)).toBeInTheDocument();
    });

    it('toggles theme on button click', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </Provider>
        );

        const toggleButton = screen.getByText(/Toggle Dark Mode/i);
        fireEvent.click(toggleButton);
        expect(store.getState().theme.mode).toBe('dark');

        fireEvent.click(toggleButton);
        expect(store.getState().theme.mode).toBe('light');
    });
});
