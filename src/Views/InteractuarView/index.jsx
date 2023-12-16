import React from 'react';
import { Stack } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/Portadas/interactuar.webp';
import Interactua from '../../Components/Interactuar';

const InteractuarView = () => {
	return (
		<Stack justify='center'>
			<Portada
				title='Interactuá'
				text='Para leer, mirar y escuchar.'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				<Interactua />
			</Container>
		</Stack>
	);
};

export default InteractuarView;
