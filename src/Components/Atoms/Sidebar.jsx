import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';

const Sidebar = ({ title }) => {
	return (
		<Stack
			bgColor='secundario'
			w='30em'
			h='100vh'
			position='sticky'
			padding={7}
			paddingTop='7em'
		>
			<Heading color='blanco' fontWeight='bold' size='2xl'>
				{title}
			</Heading>
		</Stack>
	);
};

export default Sidebar;
