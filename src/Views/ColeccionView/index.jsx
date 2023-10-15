import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import Sidebar from '../../Components/Atoms/Sidebar';
import Container from '../../Components/Atoms/Container';

const ColeccionView = () => {
	return (
		<Stack align="center">
			<Container>
                <Heading as="h1">Colección</Heading>
            </Container>
		</Stack>
	);
};

export default ColeccionView;
