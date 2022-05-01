import React, { isValidElement, Children } from 'react';
import type { FC, ReactElement } from 'react';
import { Text, Box } from 'ink';
import figures from './figures';
import RenderSpinner, { type Spinner } from './RenderSpinner';

type StateLoading = 'loading';
type StateOthers = 'pending' | 'success' | 'warning' | 'error';

type State = StateLoading | StateOthers;

const getSymbol = (state: State) => {
	if (state === 'warning') {
		return (<Text color="yellow">{figures.warning}</Text>);
	}

	if (state === 'error') {
		return (<Text color="red">{figures.cross}</Text>);
	}

	if (state === 'success') {
		return (<Text color="green">{figures.tick}</Text>);
	}

	if (state === 'pending') {
		return (<Text color="gray">{figures.squareSmallFilled}</Text>);
	}

	return ' ';
};

const getPointer = (state: State) => (
	<Text color={state === 'error' ? 'red' : 'yellow'}>
		{figures.pointer}
	</Text>
);

type BaseProps = {
	label: string;
	status?: string;
	output?: string;
	isExpanded?: boolean;
	children?: ReactElement | ReactElement[];
};

const Task: FC<BaseProps & ({
	state?: StateOthers;
	spinner?: Spinner;
} | {
	state: StateLoading;
	spinner: Spinner;
})> = ({
	label,
	state = 'pending',
	status,
	output,
	spinner,
	isExpanded,
	children,
}) => {
	const childrenArray = Children.toArray(children);
	const listChildren = childrenArray.filter(node => isValidElement(node));
	let icon = (state === 'loading')
		? (
			<Text color="yellow">
				<RenderSpinner spinner={spinner} />
			</Text>
		)
		: getSymbol(state);

	if (isExpanded) {
		icon = getPointer(state);
	}

	return (
		<Box flexDirection="column">
			<Box>
				<Box marginRight={1}>
					<Text>
						{ icon }
					</Text>
				</Box>
				<Text>
					{ label }
				</Text>
				{
					status
						? (
							<Box marginLeft={1}>
								<Text dimColor>
									[{status}]
								</Text>
							</Box>
						)
						: undefined
				}
			</Box>
			{
				output
					? (
						<Box marginLeft={2}>
							<Text color="gray">
								{ `${figures.arrowRight} ${output}` }
							</Text>
						</Box>
					)
					: undefined
			}
			{ (isExpanded && listChildren.length > 0) && (
				<Box
					flexDirection="column"
					marginLeft={2}
				>
					{ listChildren }
				</Box>
			) }
		</Box>
	);
};

export default Task;
