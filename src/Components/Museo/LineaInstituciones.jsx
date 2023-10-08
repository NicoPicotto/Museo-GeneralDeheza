import React from 'react';
import { Stack } from '@chakra-ui/react';
import Container from '../Atoms/Container';
import TimelineInstituciones from './TimelineInstituciones';
const LineaInstituciones = () => {
	return (
		<Container overflowX='hidden' p={0}>
			<Stack h='100%'>
				<TimelineInstituciones />
			</Stack>
		</Container>
	);
};

export default LineaInstituciones;