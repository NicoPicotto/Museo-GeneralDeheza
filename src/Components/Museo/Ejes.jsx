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
							<Text fontSize='lg' textAlign='justify'>
								¿Qué eran los Ramos Generales? Hoy se los suele recordar bajo el
								apelativo de “almacenes”, pero los comercios de ramos generales
								llegaron a ser mucho más que simples sitios destinados a la
								provisión de mercaderías. No sólo se dedicaban a la venta de
								bebidas, alimentos y tabacos, sino también a los productos
								textiles de la indumentaria campestre (alpargatas, botas,
								boinas, bombachas) y a los de limpieza, bazar y ferretería,
								entre muchos otros. Completaba el cuadro la distribución zonal
								de ciertas marcas de cervezas, vinos, soda o gaseosas, así como
								el despacho de combustibles y acopio de cereales. En cierta
								forma, podríamos decir que no eran nada específico, pero mucho
								en general.
							</Text>
							<Text fontSize='lg' textAlign='justify'>
								Nuestra ciudad contaba con dos negocios de Ramos Generales muy
								importantes. Uno se llamaba Ramos Generales Cavalchini, Maino y
								Cía. S.R.L, ubicado frente a la terminal de ómnibus. El otro,
								perteneciente al primer intendente José Frouté, estaba ubicado
								en la actual Galería de General Deheza.
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
