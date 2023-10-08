import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const SwiperStack = ({ year, text }) => {
	return (
		<Stack
			bgColor='cuarto'
			_hover={{ bgColor: 'terciario' }}
			h='100%'
			p={5}
			color='fondo'
			transition='0.2s ease'
		>
			<Heading>{year}</Heading>
			<Text fontSize='xl'>{text}</Text>
		</Stack>
	);
};

export default SwiperStack;
