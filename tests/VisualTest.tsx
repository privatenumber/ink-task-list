import React from 'react';
import { render, Text } from 'ink';
import spinners from 'cli-spinners';
import { List, ListItem } from '../src/index';

const spinnerNames = Object.keys(spinners).filter(spinnerName => spinnerName !== 'default');

render(
	<List>
		<Text>
			=== States ===
		</Text>
		<ListItem
			label="Pending"
			state="pending"
		/>
		<ListItem
			label="Loading"
			state="loading"
		/>
		<ListItem
			label="Success"
			state="success"
		/>
		<ListItem
			label="Warning"
			state="warning"
		/>
		<ListItem
			label="Error"
			state="error"
		/>

		<Text>
			=== Nested ===
		</Text>

		<ListItem
			label="Item A"
			state="error"
			isExpanded
		>
			<ListItem
				label="Item AA"
			/>
			<ListItem
				label="Item AB"
				isExpanded
			>
				<ListItem
					label="Item ABA"
					state="loading"
				/>
			</ListItem>
		</ListItem>

		<ListItem
			label="Item B"
			state="warning"
		>
			<ListItem
				label="Item BA"
				state="loading"
			/>
			<ListItem
				label="Item BB"
				state="success"
			>
				<ListItem
					label="Item BBA"
					state="loading"
				/>
				<ListItem
					label="Item BBB"
					state="success"
				>
					<ListItem
						label="Item BBBA"
						state="loading"
					/>
					<ListItem
						label="Item BBBB"
						state="success"
					/>
				</ListItem>
			</ListItem>
		</ListItem>
		<ListItem
			label="Item C"
			state="error"
		/>

		<Text>
			=== Spinner types ===
		</Text>
		{
			spinnerNames.map(spinnerType => (
				<ListItem
					key={spinnerType}
					label={spinnerType}
					spinnerType={spinnerType}
					state="loading"
				/>
			))
		}
	</List>,
);
