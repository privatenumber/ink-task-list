// Fork of https://github.com/vadimdemedes/ink-spinner

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
	const [frameIndex, setFrameIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setFrameIndex((currentFrameIndex) => {
				const isLastFrame = currentFrameIndex === (spinner.frames.length - 1);
				return isLastFrame ? 0 : currentFrameIndex + 1;
			});
		}, spinner.interval);

		return () => {
			clearInterval(timer);
		};
	}, [spinner]);

	return <Text>{spinner.frames[frameIndex]}</Text>;
};

export default RenderSpinner;
