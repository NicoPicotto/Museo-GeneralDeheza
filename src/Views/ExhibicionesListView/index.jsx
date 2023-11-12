import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import ExhibicionesContainer from '../../Components/Exhibiciones/ExhibicionesContainer';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/Exhibiciones/01/14.jpg';

const ExhibicionesView = () => {
	return (
		<Stack>
			<Portada
				title='Exhibiciones'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'
				img={fondoPortada}
			/>
			<Container>
				<ExhibicionesContainer />
			</Container>
		</Stack>
	);
};

export default ExhibicionesView;
