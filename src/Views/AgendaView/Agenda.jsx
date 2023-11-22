import React from 'react';
import { Stack } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import ColeccionContainer from '../../Components/Coleccion/ColeccionContainer';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/Coleccion/portada.jpg';

const AgendaView = () => {
	return (
		<Stack justify='center'>
			<Portada
				title='Agenda'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				
			</Container>
		</Stack>
	);
};

export default AgendaView;