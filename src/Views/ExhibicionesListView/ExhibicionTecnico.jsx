import React from 'react';
import { Stack, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react';
import Portada from '../../Components/Atoms/Portada';
import Container from '../../Components/Atoms/Container';
import fondoPortada from '/assets/Exhibiciones/01/11.jpg';
import ExhibicionMasonry from '../../Components/Exhibiciones/ExhibicionMasonry';

const ExhibicionTecnico = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Portada
				title='Semana del Arte'
				text='Instituto Técnico Adrián P. Urquía'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				<Stack marginTop='-100px' spacing={5} paddingInline='50px'>
					<Stack
						color='negro'
						bgColor='white'
						p={5}
						borderRadius={10}
						h='fit-content'
						boxShadow='md'
						mb={10}
					>
						<Text as='i' fontSize='lg'>
							El espacio se puebla del imaginario del futuro trazado por el
							ancestral dibujo, la línea madre de las artes, se afirma y valora;
							educación, comunicación y estética conviven y se potencian. La
							mirada hacia un futuro, tal vez pluscuamperfecto, recorre caminos
							sinuosos, llenos de contradicciones y desesperanzas aunque brille
							la luz de cuando en cuando. Conceptualmente, un final ominosamente
							negro puede ser, contradictoriamente, el comienzo de todo. Una
							obra resignifica la de al lado o la de enfrente en
							contraposiciones, diálogos y confrontaciones, visiones
							esperanzadas conviven con miradas burlonas, complejas destacando
							la creatividad y la imaginación. Pensar acerca de la educación, o
							la superación del lienzo blanco, puntos de vista y estéticas, no
							solo mostrar, sino buscar diálogos de la metáfora Encuentro de
							instituciones que apoyan el cruce entre arte y la población,
							decisión valiente y riesgosa, expandir el espacio y el tiempo,
							superar la cosificación del arte, seleccionar obras en ejecución y
							proceso, valorizar más el camino que la meta. “Lo vanguardista se
							apoya en la mutación y el cambio, nada es permanente y coexisten
							varios puntos de vista.”
						</Text>
					</Stack>
					<ExhibicionMasonry />
				</Stack>
			</Container>
		</Stack>
	);
};

export default ExhibicionTecnico;
