import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Testimonials Component', () => {
    it('renders the testimonials section', () => {
        render(<Testimonials />);
        expect(screen.getByText(/Testimonials/i)).toBeInTheDocument();
    });

    it('allows a user to add a new testimonial', async () => {
        render(<Testimonials />);

        // Wait for the form to appear after loading
        await waitFor(() => expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument());

        const nameInput = screen.getByPlaceholderText(/Your Name/i);
        const testimonialInput = screen.getByPlaceholderText(/Your Testimonial/i);
        const submitButton = screen.getByText(/Submit/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(testimonialInput, { target: { value: 'This is a great portfolio!' } });
        fireEvent.click(submitButton);

        // Assert that the new testimonial is rendered
        expect(screen.getByText(/This is a great portfolio!/i)).toBeInTheDocument();
        expect(screen.getByText(/- John Doe/i)).toBeInTheDocument();
    });
});
