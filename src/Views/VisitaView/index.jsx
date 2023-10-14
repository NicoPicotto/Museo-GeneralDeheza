import React from 'react';
import {
	Stack,
	Text,
	Grid,
	GridItem,
	Heading,
	Link,
	useMediaQuery,
	Tooltip,
} from '@chakra-ui/react';
import Sidebar from '../../Components/Atoms/Sidebar';
import {
	MdLocationOn,
	MdAccessTimeFilled,
	MdAccessibilityNew,
	MdGroup,
} from 'react-icons/md';

const VisitaView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			position='relative'
			spacing={0}
			height='calc(100vh - 5rem)'
		>
			<Sidebar
				title='¡Vení a visitarnos!'
				subtitle='Descubrí los tesoros históricos de General Deheza.'
			/>
			<Grid
				templateRows={isMobile ? 'repeat(4, 1fr)' : 'repeat(4, 1fr)'}
				templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(1, 1fr)'}
				w='100%'
			>
				<GridItem
					w='100%'
					bgColor='#F2F2F2'
					p={7}
					transition='0.2s ease'
					_hover={{ bgColor: 'cuarto' }}
					color='negro'
					borderBottom="1px solid"
					borderBottomColor="cuarto"
				>
					<Stack direction='row'>
						<Stack>
							<MdLocationOn fontSize='2rem' />
						</Stack>
						<Stack>
							<Heading>Ubicación</Heading>
							<Tooltip
								hasArrow
								label='Cómo llegar con Google Maps'
								placement='bottom'
								bgColor='secundario'
							>
								<Text fontSize='lg'>
									<Link
										href='https://maps.app.goo.gl/ydRLEN6PtFRbaGNG6'
										target='_blank'
									>
										Nuestra Señora de La Asunción 51 General Deheza.
									</Link>
								</Text>
							</Tooltip>
						</Stack>
					</Stack>
				</GridItem>
				<GridItem
					w='100%'
					bgColor='#F2F2F2'
					p={7}
					transition='0.2s ease'
					_hover={{ bgColor: 'cuarto' }}
					color='negro'
					borderBottom="1px solid"
					borderBottomColor="cuarto"
				>
					<Stack direction='row'>
						<Stack>
							<MdAccessTimeFilled fontSize='2rem' />
						</Stack>
						<Stack>
							<Heading>Horarios</Heading>
							<Text fontSize='lg'>Lunes a viernes, de 8:00 a 13:00 hs.</Text>
						</Stack>
					</Stack>
				</GridItem>
				<GridItem
					w='100%'
					bgColor='#F2F2F2'
					p={7}
					transition='0.2s ease'
					_hover={{ bgColor: 'cuarto' }}
					color='negro'
					borderBottom="1px solid"
					borderBottomColor="cuarto"
				>
					<Stack direction='row'>
						<Stack>
							<MdAccessibilityNew fontSize='2rem' />
						</Stack>
						<Stack>
							<Heading>Accesibilidad</Heading>
							<Text fontSize='lg'>WiFi libre y gratuito.</Text>
							<Text fontSize='lg'>
								Rampas desde su ingreso y con acceso a todas sus salas.
							</Text>
							<Text fontSize='lg'>Baños accesibles.</Text>
						</Stack>
					</Stack>
				</GridItem>
				<GridItem
					w='100%'
					bgColor='#F2F2F2'
					p={7}
					transition='0.2s ease'
					_hover={{ bgColor: 'cuarto' }}
					color='negro'
				>
					<Stack direction='row'>
						<Stack>
							<MdGroup fontSize='2rem' />
						</Stack>
						<Stack>
							<Heading>Visitas grupales</Heading>
							<Text fontSize='lg'>
								Te invitamos a programar las visitas grupales para cada nivel
								educativo llamando al{' '}
								<Tooltip
									hasArrow
									label='Tocá para llamar por teléfono'
									placement='bottom'
									bgColor='secundario'
								>
									<Link href='tel:+03584057529' as='b'>
										(358) 4057529
									</Link>
								</Tooltip>
								.
							</Text>
						</Stack>
					</Stack>
				</GridItem>
			</Grid>
		</Stack>
	);
};

export default VisitaView;
