import React from 'react';
import { Stack } from '@chakra-ui/react';
import Container from '../Atoms/Container';
import Timeline from './Timeline';
const LineaGeneral = () => {
	return (
		<Container overflowX='hidden' p={0}>
			<Stack h='100%'>
				<Timeline />
			</Stack>
		</Container>
	);
};

export default LineaGeneral;
