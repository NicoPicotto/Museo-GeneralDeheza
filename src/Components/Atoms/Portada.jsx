import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const Portada = ({ title, img, text }) => {
	return (
		<Stack
			bgSize='cover'
			h='500px'
			bgImage={`linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4) 100%), url(${img})`}
			bgPos='center'
			align='center'
			paddingInline='75px'
		>
			<Stack maxW='1920px' h='100%' justify='center'>
				<Heading size='3xl' color='background'>
					{title}
				</Heading>
				<Text fontSize='lg' color='background'>
					{text}
				</Text>
			</Stack>
		</Stack>
	);
};

export default Portada;
