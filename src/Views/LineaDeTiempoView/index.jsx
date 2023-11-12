import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import LineaGeneral from '../../Components/Museo/LineaGeneral';
import events from "../../Components/DatosLineas/DatosLineaGeneral"
import LineaMuseo from '../../Components/Museo/LineaMuseo';

const LineaDeTiempoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
			paddingTop="5em"
			height='calc(100vh - 5rem)'
			justify={isMobile ? 'flex-start' : 'center'}
		>
			<Container>
				<LineaMuseo events={events}/>
			</Container>
		</Stack>
	);
};

export default LineaDeTiempoView;
