import React from 'react';
import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import Introduccion from '../../Components/Museo/Introduccion';
import Container from '../../Components/Atoms/Container';
import fondoPortada from '/assets/Historia/casa.jpg';
import Portada from '../../Components/Atoms/Portada';

const HistoriaView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Portada
				title='Historia'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				img={fondoPortada}
			/>
			<Container alignSelf="center">
				<Introduccion />
			</Container>
		</Stack>
	);
};

export default HistoriaView;
