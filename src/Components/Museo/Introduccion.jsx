import React from 'react';
import { Stack, Text, useMediaQuery, Heading, Image } from '@chakra-ui/react';

import tanque from '/assets/Historia/tanque.jpg';

const Introduccion = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack direction='row' marginTop='-100px' spacing={5} paddingInline='50px'>
			<Stack
				position='sticky'
				top={120}
				spacing={5}
				color='negro'
				w='50%'
				bgColor='white'
				p={5}
				borderRadius={10}
				h='fit-content'
				boxShadow='md'
			>
				<Heading size='lg' color='primario'>
					Introducción
				</Heading>
				<Text>
					La creación del Museo se origina a partir del programa “HERENCIAS”.
				</Text>
				<Text>
					La importancia de la memoria histórico-social permite recuperar el
					camino recorrido, las dificultades enfrentadas y superadas, lo que no
					pudo ser y lo que sí. Hacer memoria es una actividad propiamente
					humana, y se convierte en un hecho “humanitario” porque nos permite
					ejercer nuestra máxima cualidad como seres: la perfectibilidad. El
					cambio y la mejora vienen, necesariamente, del aprendizaje a partir de
					lo vivido; de ahí, la importancia del recupero y la reconstrucción del
					pasado que nos constituye como pueblo.
				</Text>
				<Text>
					El objetivo del Museo es generar un espacio físico en General Deheza
					donde se pueda resguardar y exhibir de manera digital los diferentes
					proyectos que forman parte del Programa Herencias. Que la localidad
					cuente con un espacio al cual recurrir para empaparse del pasado;
					lograr una interacción entre las instituciones y la historia de
					nuestra ciudad; crear un espacio donde se atesore nuestra historia.
				</Text>
			</Stack>
			<Stack w='50%' borderRadius={10} overflow='hidden' shadow='md'>
				<Image src={tanque} objectFit='cover' />
			</Stack>
		</Stack>
	);
};

export default Introduccion;
