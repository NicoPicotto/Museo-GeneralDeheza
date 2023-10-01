import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const Sidebar = ({ title, subtitle }) => {
	return (
		<Stack
			bgColor='secundario'
			w={['100%', '100%', '40em']}
			h={['100%', '100%', '100vh']}
			position='sticky'
			top={0}
			padding={7}
			paddingTop='7em'
			zIndex={5}
		>
			<Heading color='blanco' fontWeight='bold' as="h1" size='2xl'>
				{title}
			</Heading>
			<Text as='i' fontSize='lg' color='fondo'>{subtitle}</Text>
		</Stack>
	);
};

export default Sidebar;
