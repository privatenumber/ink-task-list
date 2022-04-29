import React from 'react';
import { render } from 'ink-testing-library';
import { describe, expect } from 'manten';
import outdent from 'outdent';
import { spyOn } from 'tinyspy';
import spinners from 'cli-spinners';
import { TaskList, Task } from '../dist/index.js';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

describe('error cases', ({ test }) => {
	test('no empty list', () => {
		// @ts-expect-error testing error throwing
		render(<TaskList />);
	});

	test('no text child', () => {
		const consoleErrorSpy = spyOn(console, 'error', noop);
		render(<TaskList>text</TaskList>);
		expect(consoleErrorSpy.callCount).toBe(1);
		consoleErrorSpy.restore();
	});
});

describe('basic use-cases', ({ test }) => {
	test('renders list', async () => {
		const { lastFrame, unmount } = render(
			<TaskList>
				<Task
					spinner={spinners.dots}
					label="Item A"
				/>
				<Task
					spinner={spinners.dots}
					label="Item B"
				/>
				<Task
					spinner={spinners.dots}
					label="Item C"
				/>
			</TaskList>,
		);

		expect(lastFrame()).toBe(
			outdent`
			◼ Item A
			◼ Item B
			◼ Item C
			`,
		);
		unmount();
	});

	test('pending state', async () => {
		const { lastFrame, unmount } = render(
			<Task
				spinner={spinners.dots}
				label="Item pending"
				state="pending"
			/>,
		);

		expect(lastFrame()).toBe('◼ Item pending');
		unmount();
	});

	test('loading state', async () => {
		const { lastFrame, unmount } = render(
			<Task
				spinner={spinners.dots}
				label="Item loading"
				state="loading"
			/>,
		);

		expect(lastFrame()).toBe('⠋ Item loading');
		unmount();
	});

	test('warning state', async () => {
		const { lastFrame, unmount } = render(
			<Task
				spinner={spinners.dots}
				label="Item warning"
				state="warning"
			/>,
		);

		expect(lastFrame()).toBe('⚠ Item warning');
		unmount();
	});

	test('error state', async () => {
		const { lastFrame, unmount } = render(
			<Task
				spinner={spinners.dots}
				label="Item error"
				state="error"
			/>,
		);

		expect(lastFrame()).toBe('✖ Item error');
		unmount();
	});

	test('success state', async () => {
		const { lastFrame, unmount } = render(
			<Task
				spinner={spinners.dots}
				label="Item success"
				state="success"
			/>,
		);

		expect(lastFrame()).toBe('✔ Item success');
		unmount();
	});

	test('nested list', async () => {
		const { lastFrame, unmount } = render(
			<TaskList>
				<Task
					spinner={spinners.dots}
					label="Item loading"
					state="loading"
					isExpanded
				>
					<Task
						spinner={spinners.dots}
						label="Item pending"
						state="pending"
					/>
				</Task>
				<Task
					spinner={spinners.dots}
					label="Nested va children prop"
					isExpanded
					// eslint-disable-next-line react/no-children-prop
					children={
						<Task
							spinner={spinners.dots}
							label="Item loading"
							state="loading"
						/>
					}
				/>
			</TaskList>,
		);

		expect(lastFrame()).toBe(
			outdent`
			❯ Item loading
			  ◼ Item pending
			❯ Nested va children prop
			  ⠋ Item loading
			`,
		);
		unmount();
	});
});
