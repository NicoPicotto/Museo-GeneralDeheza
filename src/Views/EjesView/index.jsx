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
import LineaGeneral from '../../Components/Museo/LineaGeneral';
import events from '/src/Components/Museo/DatosLineaGeneral';

const EjesView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
			height='calc(100vh - 5rem)'
			justify='center'
		>
			<Container>
				<Tabs position='relative' variant='unstyled' w='100%' align='center' overflow="hidden">
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
								<LineaGeneral events={events} />
							</Stack>
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
						<TabPanel>
							<p>three!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</Stack>
	);
};

export default EjesView;
