import React from 'react';
import { Stack, Text, useMediaQuery, Heading } from '@chakra-ui/react';
import Container from '../Atoms/Container';

const Introduccion = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Container overflowX='hidden'>
			<Stack spacing={5} color='secundario' mb={5} maxW="60ch">
				<Heading>Introducción</Heading>
				<Text fontSize='lg'>
					La creación del Museo se origina a partir del programa “HERENCIAS”.
				</Text>
				<Text fontSize='lg'>
					La importancia de la memoria histórico-social permite recuperar el
					camino recorrido, las dificultades enfrentadas y superadas, lo que no
					pudo ser y lo que sí. Hacer memoria es una actividad propiamente
					humana, y se convierte en un hecho “humanitario” porque nos permite
					ejercer nuestra máxima cualidad como seres: la perfectibilidad. El
					cambio y la mejora vienen, necesariamente, del aprendizaje a partir de
					lo vivido; de ahí, la importancia del recupero y la reconstrucción del
					pasado que nos constituye como pueblo.
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
		</Container>
	);
};

export default Introduccion;
