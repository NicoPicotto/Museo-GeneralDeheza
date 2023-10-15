import React, { useState } from 'react';
import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import Sidebar from '../../Components/Atoms/Sidebar';
import Introduccion from '../../Components/Museo/Introduccion';
import LineaGeneral from '../../Components/Museo/LineaGeneral';
import { BsArrowRightShort } from 'react-icons/bs';
import LineaInstituciones from '../../Components/Museo/LineaInstituciones';
import Container from '../../Components/Atoms/Container';

const HistoriaView = () => {
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
				<Introduccion />
			</Container>
		</Stack>
	);
};

export default HistoriaView;
