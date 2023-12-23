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
import LeerContainer from './Leer/LeerContainer';
import MirarContainer from './Mirar/MirarContainer';
import EscucharContainer from './Escuchar/EscucharContainer';

const Interactua = () => {
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
						<Heading size='lg'>Leer</Heading>
					</Tab>
					<Tab>
						<Heading size='lg'>Mirar</Heading>
					</Tab>
					<Tab>
						<Heading size='lg'>Escuchar</Heading>
					</Tab>
					<Tab>
						<Heading size='lg'>Interactuar</Heading>
					</Tab>
				</TabList>
				<TabIndicator mt='-1.5px' height='2px' bg='cuarto' borderRadius='1px' />
				<TabPanels>
					<TabPanel>
						<LeerContainer />
					</TabPanel>

					<TabPanel>
						<MirarContainer />
					</TabPanel>
					<TabPanel>
						<EscucharContainer />
					</TabPanel>

					<TabPanel></TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	);
};

export default Interactua;
