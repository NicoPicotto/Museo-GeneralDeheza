import {
	Grid,
	GridItem,
	Stack,
	Image,
	Heading,
	Text,
	Button,
	Link,
	Divider,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import list from './ExhibicionesList';
import { BiSolidUser } from 'react-icons/bi';

const ExhibicionesContainer = () => {
	return (
		<Grid
			templateColumns='repeat(2, 6fr)'
			gap={6}
			
			marginTop='-50px'
		>
			{list.map((item, index) => (
				<GridItem
					key={index}
					bgColor='white'
					shadow='md'
					overflow='hidden'
					borderRadius={5}
				>
					<Stack h='100%'>
						<Image src={item.portada} alt={item.titulo} />
						<Stack h='100%' paddingInline={5}>
							<Stack paddingTop={2}>
								<Heading color='primario' size='lg'>
									{item.titulo}
								</Heading>
								<Divider borderColor='cuarto' />
								<Stack direction='row'>
									<Stack
										direction='row'
										align='center'
										bgColor='cuarto'
										paddingInline={3}
										paddingBlock={1}
										borderRadius={4}
									>
										{' '}
										<BiSolidUser />
										<Text fontSize='sm'>
											{item.autor}
										</Text>
									</Stack>
								</Stack>
							</Stack>
							<Divider borderColor='cuarto' />
							<Text>{item.shortDescription}</Text>
						</Stack>
						<Link
							as={ReachLink}
							to={`/exhibiciones/${item.slug}`}
							w='fit-content'
							p={5}
						>
							<Button
								bgColor='primario'
								color='fondo'
								_hover={{ bgColor: 'terciario' }}
							>
								Ver muestra completa
							</Button>
						</Link>
					</Stack>
				</GridItem>
			))}
		</Grid>
	);
};

export default ExhibicionesContainer;
