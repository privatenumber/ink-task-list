import React, { FC } from 'react';
import { Box } from 'ink';
import PropTypes from 'prop-types';

const List: FC = ({ children }) => (
	<Box flexDirection="column">
		{ children }
	</Box>
);

List.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export = List;
