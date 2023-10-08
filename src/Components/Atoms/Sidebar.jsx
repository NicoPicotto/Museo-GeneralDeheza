import React from 'react';
import { Stack, Heading, Text, useMediaQuery } from '@chakra-ui/react';

const Sidebar = ({ title, subtitle, h, children }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			bgColor='secundario'
			w={isMobile ? '100%' : '30em'}
			h={h ? h : isMobile ? '100%' : 'calc(100vh - 5rem)'}
			position='sticky'
			top={0}
			padding={7}
			zIndex={5}
		>
			<Heading
				color='blanco'
				fontWeight='bold'
				as='h1'
				size='xl'
				lineHeight={1}
			>
				{title}
			</Heading>
			<Text as='i' fontSize='lg' color='fondo'>
				{subtitle}
			</Text>
			{children}
		</Stack>
	);
};

export default Sidebar;
