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
import LineaChrono from '../../Components/Museo/LineaChrono';

const EjesView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
			paddingTop='5em'
			justify='center'
		>
			<Container>
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
							<Heading size='lg'>Barrios</Heading>
						</Tab>
						<Tab>
							<Heading size='lg'>Lo Social</Heading>
						</Tab>
					</TabList>
					<TabIndicator
						mt='-1.5px'
						height='2px'
						bg='cuarto'
						borderRadius='1px'
					/>
					<TabPanels>
						<TabPanel>
							<Stack spacing={10}>
								<Text fontSize='lg' paddingInline={20}>
									Toda institución nace como consecuencia de una acción
									aglutinante en pro de un proyecto compartido. Si consideramos
									este concepto tal vez comprendamos que no fue casual que las
									primeras instituciones dehecinas fueran basadas en la
									necesidad de Fe, de Integración, de Conocimiento y Trabajo. En
									la línea de tiempo se ordenaron las instituciones educativas y
									sociales, según la antigüedad de su primera entidad cuyo año
									de fundación y nombre a continuación se detalla.
								</Text>
								<LineaChrono events={instituciones} />
							</Stack>
						</TabPanel>
						<TabPanel>
							<Stack>
								<Text fontSize='lg'>Crecimiento Urbano y Rural</Text>
							</Stack>
						</TabPanel>
						<TabPanel>
							<Stack spacing={10}>
								<Text fontSize='lg'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Laboriosam pariatur deserunt deleniti amet quidem hic
									excepturi, architecto et animi aliquam. Voluptatem unde in
									distinctio voluptate fugiat fuga nisi similique nihil.
								</Text>
								<SocialRamosGenerales />
							</Stack>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</Stack>
	);
};

export default EjesView;
