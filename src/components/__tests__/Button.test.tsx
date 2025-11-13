import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../ui/Button';

describe('Button', () => {
	it('renders children', () => {
		render(<Button>Click me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });

		expect(button).toBeInTheDocument();
		// проверим что это именно button с type="button" по умолчанию
		expect(button).toHaveAttribute('type', 'button');
	});

	it('calls onClick when clicked', () => {
		const handleClick = jest.fn();

		render(<Button onClick={handleClick}>Click me</Button>);

		const button = screen.getByRole('button', { name: /click me/i });

		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('passes custom type and formAction', () => {
		const mockAction = jest.fn();

		render(
			<form>
				<Button type='submit' action={mockAction}>
					Submit
				</Button>
			</form>
		);

		const button = screen.getByRole('button', { name: /submit/i });

		expect(button).toHaveAttribute('type', 'submit');
		// formAction – это проп, который попадает в DOM-атрибут
		expect(button).toHaveAttribute('formaction');
	});
});
