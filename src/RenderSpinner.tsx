import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Text } from 'ink';

export type Spinner = {
	interval: number;
	frames: string[];
};

const RenderSpinner: FC<{
	spinner: Spinner;
}> = ({ spinner }) => {
	const [frame, setFrame] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setFrame((previousFrame) => {
				const isLastFrame = previousFrame === spinner.frames.length - 1;
				return isLastFrame ? 0 : previousFrame + 1;
			});
		}, spinner.interval);

		return () => {
			clearInterval(timer);
		};
	}, [spinner]);

	return <Text>{spinner.frames[frame]}</Text>;
};

export default RenderSpinner;
