import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import LineaBase from '../../Components/Museo/LineaBase';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/Exhibiciones/01/16.jpg';
import events from '../../Components/DatosLineas/DatosLineaGeneral';

const LineaDeTiempoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack justify='center'>
			<Portada
				title='Linea de tiempo'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'
				img={fondoPortada}
			/>
			<Container mt='-60px'>
				<LineaBase events={events} />
			</Container>
		</Stack>
	);
};

export default LineaDeTiempoView;
