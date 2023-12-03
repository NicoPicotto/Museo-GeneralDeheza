import React from 'react';
import {
	Stack,
	Text,
	Divider,
	useMediaQuery,
	Heading,
	Link,
} from '@chakra-ui/react';

import fondoPortada from '/assets/Visitas/visitas.jpg';
import Portada from '../../Components/Atoms/Portada';
import Container from '../../Components/Atoms/Container';
import Visita from '../../Components/Visita';

const VisitaView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack justify='center'>
			<Portada
				title='Visita'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				<Visita />
			</Container>
		</Stack>
	);
};

export default VisitaView;
