import React from 'react';
import { render, Text, Newline } from 'ink';
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

		<Newline />

		<Text>
			=== States with status ===
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

		<Newline />

		<Text>
			=== States with output ===
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

		<Newline />

		<Text>
			=== Nested ===
		</Text>

		<Task
			label="Parent"
			isExpanded
		>
			<Task
				label="Child warning"
				state="warning"
			/>
			<Task
				label="Child error"
				state="error"
			/>
			<Task
				label="Child success"
				state="success"
			/>
			<Task
				label="Child parent"
				isExpanded
			>
				<Task
					label="Grandchild loading"
					state="loading"
				/>
			</Task>
			<Task
				label="Child pending"
				state="pending"
			/>
		</Task>

		<Task
			label="Parent with collapsed children"
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

		<Newline />

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
