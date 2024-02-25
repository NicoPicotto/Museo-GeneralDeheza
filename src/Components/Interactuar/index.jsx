import {
	Tabs,
	TabList,
	Tab,
	TabIndicator,
	Stack,
	TabPanel,
	TabPanels,
	useMediaQuery,
	Heading,
} from '@chakra-ui/react';
import LeerContainer from './Leer/LeerContainer';
import MirarContainer from './Mirar/MirarContainer';
import EscucharContainer from './Escuchar/EscucharContainer';
import InteractuaContainer from './Interactua/InteractuaContainer';

const Interactua = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Tabs
				position='relative'
				variant='unstyled'
				w='100%'
				align='center'
				overflow='hidden'
			>
				<TabList
					gap={isMobile ? 2 : 10}
					color='negro'
					flexDir={isMobile ? 'column' : 'row'}
				>
					<Tab _selected={isMobile && { bgColor: 'terciario', color: 'fondo' }}>
						<Heading size='lg'>Leer</Heading>
					</Tab>
					<Tab _selected={isMobile && { bgColor: 'terciario', color: 'fondo' }}>
						<Heading size='lg'>Mirar</Heading>
					</Tab>
					<Tab _selected={isMobile && { bgColor: 'terciario', color: 'fondo' }}>
						<Heading size='lg'>Escuchar</Heading>
					</Tab>
					<Tab _selected={isMobile && { bgColor: 'terciario', color: 'fondo' }}>
						<Heading size='lg'>Interactuar</Heading>
					</Tab>
				</TabList>
				<TabIndicator
					display={isMobile && 'none'}
					mt='-1.5px'
					height='2px'
					bg='cuarto'
					borderRadius='1px'
				/>
				<TabPanels >
					<TabPanel p={isMobile && 0}>
						<LeerContainer />
					</TabPanel>
					<TabPanel p={isMobile && 0}>
						<MirarContainer />
					</TabPanel>
					<TabPanel p={isMobile && 0}>
						<EscucharContainer />
					</TabPanel>
					<TabPanel p={isMobile && 0}>
						<InteractuaContainer />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	);
};

export default Interactua;
