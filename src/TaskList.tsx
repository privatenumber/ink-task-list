import React from 'react';
import type { FC, ReactNode } from 'react';
import { Box } from 'ink';

const TaskList: FC<{
	children: ReactNode | ReactNode[];
}> = ({ children }) => (
	<Box flexDirection="column">
		{ children }
	</Box>
);

export default TaskList;
