import React from 'react';
import { Stack, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react';
import Portada from '../../Components/Atoms/Portada';
import Container from '../../Components/Atoms/Container';
import fondoPortada from '/assets/Exhibiciones/01/11.jpg';
import ExhibicionPatronales from '../../Components/Exhibiciones/ExhibicionPatronales';

const ExhibicionPatronalesView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Portada
				title='Festejos Patronales'
				text='Municipalidad General Deheza'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				<ExhibicionPatronales />
			</Container>
		</Stack>
	);
};

export default ExhibicionPatronalesView;
