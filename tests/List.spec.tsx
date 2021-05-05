import React from 'react';
import { render } from 'ink-testing-library';
import { List, ListItem } from '../dist/index.js';

describe('error cases', () => {
	test('no empty list', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
		render(<List />);
		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		consoleErrorSpy.mockRestore();
	});

	test('no text child', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
		render(<List>text</List>);
		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		consoleErrorSpy.mockRestore();
	});
});

describe('basic use-cases', () => {
	test('renders list', () => {
		const { lastFrame } = render(
			<List>
				<ListItem label="Item A" />
				<ListItem label="Item B" />
				<ListItem label="Item C" />
			</List>,
		);

		expect(lastFrame()).toMatchInlineSnapshot(`
		"[90m◼[39m Item A
		[90m◼[39m Item B
		[90m◼[39m Item C"
	`);
	});

	test('pending state', () => {
		const { lastFrame } = render(
			<ListItem label="Item pending"
				state="pending" />,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"[90m◼[39m Item pending"');
	});

	test('loading state', () => {
		const { lastFrame } = render(
			<ListItem label="Item loading"
				state="loading" />,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"[33m⠋[39m Item loading"');
	});

	test('warning state', () => {
		const { lastFrame } = render(
			<ListItem label="Item warning"
				state="warning" />,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"[33m⚠[39m Item warning"');
	});

	test('error state', () => {
		const { lastFrame } = render(<ListItem label="Item error"
			state="error" />);

		expect(lastFrame()).toMatchInlineSnapshot('"[31m✖[39m Item error"');
	});

	test('success state', () => {
		const { lastFrame } = render(
			<ListItem label="Item success"
				state="success" />,
		);

		expect(lastFrame()).toMatchInlineSnapshot('"[32m✔[39m Item success"');
	});

	test('nested list', () => {
		const { lastFrame } = render(
			<List>
				<ListItem label="Item loading"
					state="loading"
					isExpanded>
					<ListItem label="Item pending"
						state="pending" />
				</ListItem>
			</List>,
		);

		expect(lastFrame()).toMatchInlineSnapshot(`
		"[33m❯[39m Item loading
		  [90m◼[39m Item pending"
	`);
	});
});
