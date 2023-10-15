import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import LineaGeneral from '../../Components/Museo/LineaGeneral';

const LineaDeTiempoView = () => {
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
				<LineaGeneral />
			</Container>
		</Stack>
	);
};

export default LineaDeTiempoView;
