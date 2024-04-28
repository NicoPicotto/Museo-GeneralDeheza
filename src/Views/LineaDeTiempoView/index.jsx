import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import LineaBase from '../../Components/Museo/LineaBase';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/Portadas/linea.jpg';
import events from '../../Components/DatosLineas/DatosLineaGeneral';

const LineaDeTiempoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack justify='center'>
			<Portada
				title='Línea de tiempo'
				text='Este deseo por revisar y entender el pasado responde a la necesidad de vislumbrar, de manera más inteligente y certera, los caminos del futuro. El objetivo de esta línea de tiempo es bucear en los precedentes aquellos factores que, aunque nos parezcan ajenos, influyeron en esta maravillosa amalgama social llamada General Deheza. Sólo resta invitarles a que juntos transitemos por los caminos de nuestra historia.'
				img={fondoPortada}
			/>
			<Container mt='-60px' alignSelf='center'>
				<LineaBase events={events} />
			</Container>
		</Stack>
	);
};

export default LineaDeTiempoView;
