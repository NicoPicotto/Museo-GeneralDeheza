import React from 'react';
import {
	Stack,
	Text,
	Divider,
	useMediaQuery,
	Tooltip,
	Heading,
} from '@chakra-ui/react';
import {
	MdLocationOn,
	MdAccessTimeFilled,
	MdAccessibilityNew,
	MdGroup,
} from 'react-icons/md';
import Container from '../../Components/Atoms/Container';

const VisitaView = () => {
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
				<Stack direction='row' h='100%' spacing={10}>
					<Stack w='50%' spacing={5} divider={<Divider borderColor='cuarto' />}>
						<Stack>
							<Stack direction='row'>
								<MdLocationOn fontSize='1.7rem' color='#A65858' />
								<Heading size='lg'>Ubicación</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>
									Nuestra Señora de La Asunción 51 General Deheza, Córdoba,
									Argentina.
								</Text>
							</Stack>
						</Stack>
						<Stack>
							<Stack direction='row'>
								<MdAccessTimeFilled fontSize='1.7rem' color='#A65858' />
								<Heading size='lg'>Horarios</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>Lunes a viernes, de 8:00 a 13:00 hs.</Text>
							</Stack>
						</Stack>
						<Stack>
							<Stack direction='row'>
								<MdAccessibilityNew fontSize='1.7rem' color='#A65858' />
								<Heading size='lg'>Accesibilidad</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>WiFi libre y gratuito.</Text>
								<Text>
									Rampas desde su ingreso y con acceso a todas sus salas.
								</Text>
								<Text>Baños accesibles.</Text>
							</Stack>
						</Stack>
						<Stack>
							<Stack direction='row'>
								<MdGroup fontSize='1.7rem' color='#A65858' />
								<Heading size='lg'>Visitas Grupales</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>
									Te invitamos a programar las visitas grupales para cada nivel
									educativo llamando al (358) 4057529.
								</Text>
							</Stack>
						</Stack>
					</Stack>
					<Stack
						w='50%'
						h='100%'
						borderRadius={10}
						overflow='hidden'
						shadow='md'
					>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d838.8329603652677!2d-63.7883881!3d-32.7569283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cdc60c379b8e8d%3A0x175a5dec928a3d76!2sCasa%20Municipal%20de%20La%20Cultura!5e0!3m2!1ses-419!2sar!4v1697378076328!5m2!1ses-419!2sar'
							allowFullScreen={true}
							height='100%'
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	);
};

export default VisitaView;
