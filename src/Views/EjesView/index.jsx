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
	Divider,
} from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import events from '../../Components/Museo/DatosLineaInstituciones';
import events2 from '../../Components/Museo/DatiosLineaBarrios';
import LineaInstituciones from '../../Components/Museo/LineaInstituciones';
import LineaBarrios from '../../Components/Museo/LineaBarrios';
import SocialRamosGenerales from '../../Components/Museo/SocialRamosGenerales';

const EjesView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
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
							<Stack>
								<Text fontSize='lg'>
									Bueno acá les mostramos las instituciones de General Deheza a
									lo largo del tiempo bla bla
								</Text>
								<LineaInstituciones events={events} />
							</Stack>
						</TabPanel>
						<TabPanel>
							<Stack>
								<Text fontSize='lg'>Crecimiento Urbano y Rural</Text>
								<LineaBarrios events={events2} />
							</Stack>
						</TabPanel>
						<TabPanel>
							<Stack spacing={10} divider={<Divider borderColor='terciario' />}>
								<SocialRamosGenerales />
								<SocialRamosGenerales />
								<SocialRamosGenerales />
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
