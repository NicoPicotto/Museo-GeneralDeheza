import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import TimelineEvent from './TimelineEvent';

const Timeline = ({events}) => {
	return (
		<Box overflowX='auto' w='full' py={4} h="20em">
			<Flex>
				{events.map((event, index) => (
					<TimelineEvent key={index} event={event} />
				))}
			</Flex>
		</Box>
	);
};

export default Timeline;
