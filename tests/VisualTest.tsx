import React from 'react';
import { render, Text } from 'ink';
import spinners from 'cli-spinners';
import { TaskList, Task } from '../src/index';

const spinnerNames = Object.keys(spinners).filter(spinnerName => spinnerName !== 'default');

render(
	<TaskList>
		<Text>
			=== States ===
		</Text>
		<Task
			label="Pending"
			state="pending"
		/>
		<Task
			label="Loading"
			state="loading"
		/>
		<Task
			label="Success"
			state="success"
		/>
		<Task
			label="Warning"
			state="warning"
		/>
		<Task
			label="Error"
			state="error"
		/>

		<Text>
			=== Nested ===
		</Text>

		<Task
			label="Item A"
			state="error"
			isExpanded
		>
			<Task
				label="Item AA"
			/>
			<Task
				label="Item AB"
				isExpanded
			>
				<Task
					label="Item ABA"
					state="loading"
				/>
			</Task>
		</Task>

		<Task
			label="Item B"
			state="warning"
		>
			<Task
				label="Item BA"
				state="loading"
			/>
			<Task
				label="Item BB"
				state="success"
			>
				<Task
					label="Item BBA"
					state="loading"
				/>
				<Task
					label="Item BBB"
					state="success"
				>
					<Task
						label="Item BBBA"
						state="loading"
					/>
					<Task
						label="Item BBBB"
						state="success"
					/>
				</Task>
			</Task>
		</Task>
		<Task
			label="Item C"
			state="error"
		/>

		<Text>
			=== Spinner types ===
		</Text>
		{
			spinnerNames.map(spinnerType => (
				<Task
					key={spinnerType}
					label={spinnerType}
					spinnerType={spinnerType}
					state="loading"
				/>
			))
		}
	</TaskList>,
);
