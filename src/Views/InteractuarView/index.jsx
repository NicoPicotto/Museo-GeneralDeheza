import React from 'react';
import { Stack } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/exhibiciones/01/_DSC8979.jpg';
import LeerContainer from '../../Components/Interactuar/Leer/LeerContainer';
import EscucharContainer from '../../Components/Interactuar/Escuchar/EscucharContainer';

const InteractuarView = () => {
	return (
		<Stack justify='center'>
			<Portada
				title='Leer, Mirar, Escuchar'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				<LeerContainer />
				<EscucharContainer />
			</Container>
		</Stack>
	);
};

export default InteractuarView;
