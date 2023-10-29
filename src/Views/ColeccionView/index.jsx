import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import ColeccionContainer from '../../Components/Coleccion/ColeccionContainer';

const ColeccionView = () => {
	return (
		<Stack align='center'>
			<Container>
				<ColeccionContainer />
			</Container>
		</Stack>
	);
};

export default ColeccionView;
