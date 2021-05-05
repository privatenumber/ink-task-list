import React from 'react';
import { render } from 'ink-testing-library';
import { TaskList, Task } from '../dist/index.js';

describe('error cases', () => {
	test('no empty list', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
		render(<TaskList />);
		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		consoleErrorSpy.mockRestore();
	});

	test('no text child', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
		render(<TaskList>text</TaskList>);
		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		consoleErrorSpy.mockRestore();
	});
});

describe('basic use-cases', () => {
	test('renders list', () => {
		const { lastFrame } = render(
			<TaskList>
				<Task label="Item A" />
				<Task label="Item B" />
				<Task label="Item C" />
			</TaskList>,
		);

		expect(lastFrame()).toMatchInlineSnapshot(`
		"◼ Item A
		◼ Item B
		◼ Item C"
	`);
	});

	test('pending state', () => {
		const { lastFrame } = render(
			<Task
				label="Item pending"
				state="pending"
			/>,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"◼ Item pending"');
	});

	test('loading state', () => {
		const { lastFrame } = render(
			<Task
				label="Item loading"
				state="loading"
			/>,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"⠋ Item loading"');
	});

	test('warning state', () => {
		const { lastFrame } = render(
			<Task
				label="Item warning"
				state="warning"
			/>,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"⚠ Item warning"');
	});

	test('error state', () => {
		const { lastFrame } = render(<Task
			label="Item error"
			state="error"
		/>);

		expect(lastFrame()).toMatchInlineSnapshot('"✖ Item error"');
	});

	test('success state', () => {
		const { lastFrame } = render(
			<Task
				label="Item success"
				state="success"
			/>,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"✔ Item success"');
	});

	test('nested list', () => {
		const { lastFrame } = render(
			<TaskList>
				<Task
					label="Item loading"
					state="loading"
					isExpanded
				>
					<Task
						label="Item pending"
						state="pending"
					/>
				</Task>
			</TaskList>,
		);

		expect(lastFrame()).toMatchInlineSnapshot(`
		"❯ Item loading
		  ◼ Item pending"
	`);
	});
});
