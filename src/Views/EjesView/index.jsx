import React from 'react';
import {
	Stack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	TabIndicator,
	useMediaQuery,
	Heading,
	Text,
} from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import instituciones from '../../Components/DatosLineas/DatosLineaInstituciones';
import SocialRamosGenerales from '../../Components/Museo/SocialRamosGenerales';
import Ejes from '../../Components/Museo/Ejes';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/Portadas/ejes.webp';

const EjesView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack justify='center'>
			<Portada
				title='Ejes'
				text='El Museo está ordenado de una manera específica para mejorar su comprensión, es decir, organizamos la historia de General Deheza en tres ejes: las Instituciones, lo Social y lo Agroindustrial.'
				img={fondoPortada}
			/>
			<Container>
				<Ejes />
			</Container>
		</Stack>
	);
};

export default EjesView;
