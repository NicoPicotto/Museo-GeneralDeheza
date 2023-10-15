import React from 'react';
import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import Introduccion from '../../Components/Museo/Introduccion';
import Container from '../../Components/Atoms/Container';

const HistoriaView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
			height='calc(100vh - 5rem)'
			justify='center'
		>
			<Container>
				<Introduccion />
			</Container>
		</Stack>
	);
};

export default HistoriaView;
