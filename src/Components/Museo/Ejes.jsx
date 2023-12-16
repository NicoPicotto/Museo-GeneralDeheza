import React from 'react';
import {
	Tabs,
	TabList,
	Tab,
	TabIndicator,
	Stack,
	TabPanel,
	TabPanels,
	Text,
	Heading,
} from '@chakra-ui/react';
import LineaBase from './LineaBase';
import instituciones from '../DatosLineas/DatosLineaInstituciones';
import SocialRamosGenerales from './SocialRamosGenerales';
import ExhibicionMasonry from '../Exhibiciones/ExhibicionMasonry';
import fotos from '../DatosLineas/AgroList';

const Ejes = () => {
	return (
		<Stack>
			<Tabs
				position='relative'
				variant='unstyled'
				w='100%'
				align='center'
				overflow='hidden'
			>
				<TabList gap={10} color='negro'>
					<Tab>
						<Heading size='lg'>Instituciones</Heading>
					</Tab>
					<Tab>
						<Heading size='lg'>Lo Social</Heading>
					</Tab>
					<Tab>
						<Heading size='lg'>Agroindustria</Heading>
					</Tab>
				</TabList>
				<TabIndicator mt='-1.5px' height='2px' bg='cuarto' borderRadius='1px' />
				<TabPanels>
					<TabPanel>
						<Stack spacing={10}>
							<Text fontSize='lg' paddingInline={20} textAlign='justify'>
								Toda institución nace como consecuencia de una acción
								aglutinante en pro de un proyecto compartido. Si consideramos
								este concepto tal vez comprendamos que no fue casual que las
								primeras instituciones dehecinas fueran basadas en la necesidad
								de Fe, de Integración, de Conocimiento y Trabajo. En la línea de
								tiempo se ordenaron las instituciones educativas y sociales,
								según la antigüedad de su primera entidad cuyo año de fundación
								y nombre a continuación se detalla.
							</Text>
							<LineaBase events={instituciones} />
						</Stack>
					</TabPanel>

					<TabPanel>
						<Stack spacing={10}>
							<Text fontSize='lg' paddingInline={20} textAlign='justify'>
								La división de la historia de General Deheza en tres ejes nos
								permite elaborar una narración más comprensible. Como
								mencionamos anteriormente, el primer eje abarca la constitución
								de las instituciones; el segundo eje abarca el desarrollo
								económico (Agro-Industria) y por último, el tercer eje abarca lo
								social, es decir, el crecimiento de la comunidad, sus
								tradiciones y costumbres. En nuestro museo, decidimos imitar los
								almacenes llamados Ramos Generales para interiorizarnos en las
								antiguas formas de comercializar.
							</Text>
							<SocialRamosGenerales />
						</Stack>
					</TabPanel>
					<TabPanel>
						<Stack pt={10}>
							<ExhibicionMasonry fotos={fotos} />
						</Stack>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	);
};

export default Ejes;
