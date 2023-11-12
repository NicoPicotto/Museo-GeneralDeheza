import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import events from '../../Components/DatosLineas/DatosLineaGeneral';
import LineaChrono from '../../Components/Museo/LineaChrono';

const LineaDeTiempoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
			paddingTop='5em'
			height='calc(100vh - 5rem)'
			justify={isMobile ? 'flex-start' : 'center'}
		>
			<Container>
				<LineaChrono events={events} />
			</Container>
		</Stack>
	);
};

export default LineaDeTiempoView;
