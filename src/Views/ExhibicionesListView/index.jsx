import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import ExhibicionesContainer from '../../Components/Exhibiciones/ExhibicionesContainer';

const ExhibicionesView = () => {
	return (
		<Stack align='center'>
			<Container>
				<ExhibicionesContainer />
			</Container>
		</Stack>
	);
};

export default ExhibicionesView;
