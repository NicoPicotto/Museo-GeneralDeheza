import { Stack, Text, useMediaQuery, Heading } from '@chakra-ui/react';
import Portada from '../../Components/Atoms/Portada';
import Container from '../../Components/Atoms/Container';
import fondoPortada from '/assets/Portadas/malvinas.webp';
import SwiperExhibiciones from '../../Components/Exhibiciones/SwiperExhibiciones';
import fotos from '../../Components/Exhibiciones/MalvinasList';

const ExhibicionMalvinas = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Portada
				title='Homenaje a Ex-Combatientes de Malvinas.'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				<Stack marginTop='-50px' spacing={5}>
					<Stack
						color='negro'
						bgColor='white'
						p={5}
						borderRadius={10}
						h='fit-content'
						boxShadow='md'
						mb={10}
						textAlign='justify'
					>
						<Heading size="sm" color="primario">Texto Introductorio: </Heading>
						<Text css={{ columnCount: 2, columnGap: '40px' }}>
							El 21 de noviembre del año 2023 se realizó un Homenaje a los Ex
							combatientes de Malvinas en el Museo. Para dicho reconocimiento,
							se ambientó el espacio con objetos y música del año 1982. En el
							montaje se encontraban impresiones de periódicos y revistas
							originales junto a objetos prestados y donados por los veteranos.
							También se diseñó una vitrina, la cual quedó fija en su homenaje.
							En la misma se encuentran cartas, fotografías, información sobre
							los ex combatientes; como su puesto y destino en Malvinas. Ángel
							Ochoa, Nelso Cassini, David Tobárez, Jorge Palacios y Daniel
							González son nuestros, son cercanos y representan el mayor símbolo
							de amor a nuestra tierra. Vocación, entrega y amor por la Patria,
							son algunos de los tantos adjetivos que los caracterizan. “A
							nuestros héroes, Honor y Memoria, por siempre“.
						</Text>
					</Stack>
					<SwiperExhibiciones fotos={fotos} />
				</Stack>
			</Container>
		</Stack>
	);
};

export default ExhibicionMalvinas;
