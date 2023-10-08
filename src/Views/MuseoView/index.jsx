import React from 'react';
import { Stack, Text, useMediaQuery, Heading } from '@chakra-ui/react';
import Sidebar from '../../Components/Atoms/Sidebar';
import Container from '../../Components/Atoms/Container';
import Timeline from '../../Components/Museo/Timeline';

const MuseoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const dummyEvents = [
		{ date: '1900', description: 'Event 1: The beginning of the century.' },
		{ date: '1920', description: 'Event 2: The roaring twenties.' },
		{ date: '1940', description: 'Event 3: World War II.' },
		{ date: '1960', description: 'Event 4: The rise of rock and roll.' },
		{ date: '1980', description: 'Event 5: The age of technology.' },
		{ date: '2000', description: 'Event 6: The new millennium.' },
		{ date: '2020', description: 'Event 7: The modern age.' },
	];

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
			height='calc(100vh - 5rem)'
		>
			<Sidebar title='Historia del museo'>
				<Stack spacing={5}>
					<Text color='fondo'>El antes</Text>
					<Text color='fondo'>Primer Casa de la Cultura</Text>
					<Text color='fondo'>Casa de la Cultura hoy</Text>
				</Stack>
			</Sidebar>
			<Container>
				<Stack spacing={5}>
					<Heading>Introducción</Heading>
					<Text fontSize='lg'>
						La creación del Museo se origina a partir del programa “HERENCIAS”.
					</Text>
					<Text fontSize='lg'>
						La importancia de la memoria histórico-social permite recuperar el
						camino recorrido, las dificultades enfrentadas y superadas, lo que
						no pudo ser y lo que sí. Hacer memoria es una actividad propiamente
						humana, y se convierte en un hecho “humanitario” porque nos permite
						ejercer nuestra máxima cualidad como seres: la perfectibilidad. El
						cambio y la mejora vienen, necesariamente, del aprendizaje a partir
						de lo vivido; de ahí, la importancia del recupero y la
						reconstrucción del pasado que nos constituye como pueblo.
					</Text>
					<Text fontSize='lg'>
						Por eso se hace necesaria la creación de una Usina Local en donde se
						puedan guardar de forma sistemática y segura todo lo recolectado, y,
						lo más importante, en donde se puedan mostrar y compartir con el
						pueblo y los visitantes de una forma accesible.
					</Text>
					<Text fontSize='lg'>
						El objetivo del Museo es generar un espacio físico en General Deheza
						donde se pueda resguardar y exhibir de manera digital los diferentes
						proyectos que forman parte del Programa Herencias. Que la localidad
						cuente con un espacio al cual recurrir para empaparse del pasado;
						lograr una interacción entre las instituciones y la historia de
						nuestra ciudad; crear un espacio donde se atesore nuestra historia.
					</Text>
				</Stack>
                <Timeline events={dummyEvents} />
			</Container>
		</Stack>
	);
};

export default MuseoView;
