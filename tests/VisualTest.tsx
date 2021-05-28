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
			=== States w/ status ===
		</Text>
		<Task
			label="Pending"
			state="pending"
			status="waiting on ..."
		/>
		<Task
			label="Loading"
			state="loading"
			status="10 MB/s"
		/>
		<Task
			label="Success"
			state="success"
			status="1.3s"
		/>
		<Task
			label="Warning"
			state="warning"
			status="skipped"
		/>
		<Task
			label="Error"
			state="error"
			status="failed"
		/>

		<Text>
			=== States w/ output ===
		</Text>
		<Task
			label="Pending"
			state="pending"
			output="Press Enter key"
		/>
		<Task
			label="Loading"
			state="loading"
			output="Building xyz..."
		/>
		<Task
			label="Success"
			state="success"
			output="Completed 6/6 tasks!"
		/>
		<Task
			label="Warning"
			state="warning"
			output="Invalid type"
		/>
		<Task
			label="Error"
			state="error"
			output="Failed to parse input"
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

		{/* <Text>
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
		} */}
	</TaskList>,
);
