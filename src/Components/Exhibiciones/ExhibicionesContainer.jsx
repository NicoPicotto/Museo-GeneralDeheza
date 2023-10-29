import React from 'react';
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
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const ExhibicionesContainer = () => {
	return (
		<Grid
			templateColumns='repeat(2, 6fr)'
			gap={6}
			paddingInline='50px'
			marginTop='-100px'
		>
			{list.map((item, index) => (
				<GridItem
					key={index}
					bgColor='white'
					shadow='md'
					overflow='hidden'
					borderRadius={5}
				>
					<Stack spacing={4} h='100%'>
						<Image src={item.portada} alt={item.titulo} />
						<Stack h='100%' spacing={4} p={5}>
							<Stack>
								<Heading color='primario' size='lg'>
									{item.titulo}
								</Heading>
								<Divider borderColor='cuarto' />
								<Stack>
									<Stack direction='row' align='center'>
										{' '}
										<BiSolidUser />
										<Text fontSize='sm' as='i'>
											{item.autor}
										</Text>
									</Stack>
									<Stack direction='row' align='center'>
										{item.vigente ? (
											<>
												<IoIosCheckmarkCircle />
												<Text fontSize='sm' as='i'>
													Vigente
												</Text>{' '}
											</>
										) : (
											<>
												<IoIosCloseCircle />
												<Text fontSize='sm' as='i'>
													Exhibición Finalizada
												</Text>
											</>
										)}
									</Stack>
								</Stack>
							</Stack>
							<Divider borderColor='cuarto' />
							<Text>{item.shortDescription}</Text>
						</Stack>
						<Link
							as={ReachLink}
							to={`/exhibiciones/${index}`}
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
