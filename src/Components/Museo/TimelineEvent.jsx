import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TimelineEvent = ({ event }) => {
	return (
		<Box minW='200px' mx={4}>
			<Text fontWeight='bold'>{event.date}</Text>
			<Text mt={2}>{event.description}</Text>
		</Box>
	);
};

export default TimelineEvent;
