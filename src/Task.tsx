import React, { FC, ReactElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from 'ink';
import figures from 'figures';
import Spinner from 'ink-spinner';
import spinners, { SpinnerName } from 'cli-spinners';

const possibleSpinnerNames = Object.keys(spinners).filter(
	spinnerName => spinnerName !== 'default',
) as SpinnerName[];

type State = 'pending' | 'loading' | 'success' | 'warning' | 'error';

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

const Task: FC<{
	label: string;
	state?: State;
	spinnerType?: string;
	isExpanded?: boolean;
	children?: ReactElement | ReactElement[];
}> = ({
	label,
	state,
	spinnerType,
	isExpanded,
	children,
}) => {
	const childrenArray = Array.isArray(children) ? children : [children];
	const listChildren = childrenArray.filter(node => isValidElement(node));
	let icon = (state === 'loading')
		? (
			<Text color="yellow">
				<Spinner type={spinnerType as SpinnerName} />
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
			</Box>
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

Task.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
	]),
	label: PropTypes.string.isRequired,
	state: PropTypes.oneOf(['pending', 'loading', 'success', 'warning', 'error']),
	spinnerType: PropTypes.oneOf(possibleSpinnerNames),
	isExpanded: PropTypes.bool,
};

Task.defaultProps = {
	state: 'pending',
	spinnerType: 'dots',
};

export = Task;
