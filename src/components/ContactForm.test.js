import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test('renders the ContactForm component without crashing', () => {
	render(<ContactForm />);
});

test('when a user fills out and submits the form, a new contact is created and displayed', () => {
	render(<ContactForm />);
	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const messageInput = screen.getByLabelText(/message/i);
	const submitButton = screen.getByRole('button', { name: /submit/i });

	userEvent.type(firstNameInput, 'Edd');
	userEvent.type(lastNameInput, 'Burkes');
	userEvent.type(emailInput, 'bluebill1049@hotmail.com');
	userEvent.type(messageInput, 'Cool guy');
	userEvent.click(submitButton);

	const newContact = screen.findByText(/Edd/i);

	newContact.then((element) => {
		expect(element).toBeTruthy();
	});
});
