import React from 'react';
import {
	Stack,
	Text,
	Divider,
	useMediaQuery,
	Heading,
	Link,
} from '@chakra-ui/react';
import {
	MdLocationOn,
	MdAccessTimeFilled,
	MdAccessibilityNew,
	MdGroup,
	MdContactSupport,
} from 'react-icons/md';
import fondoPortada from '/assets/Visitas/visitas.jpg';
import Portada from '../../Components/Atoms/Portada';
import Container from '../../Components/Atoms/Container';

const VisitaView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Portada
				title='Visita'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				img={fondoPortada}
			/>
			<Container alignSelf='center'>
				<Stack h='100%' marginTop='-100px'>
					<Stack direction='row' flexWrap='wrap' justify='center' spacing={2}>
						<Stack bgColor='white' borderRadius={5} p={5} w='30%' shadow='md'>
							<Stack direction='row'>
								<MdLocationOn fontSize='1.7rem' color='#818B7C' />
								<Heading size='lg' color="primario">Ubicación</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>
									Nuestra Señora de La Asunción 51 General Deheza, Córdoba,
									Argentina.
								</Text>
							</Stack>
						</Stack>
						<Stack bgColor='white' borderRadius={5} p={5} w='30%' shadow='md'>
							<Stack direction='row'>
								<MdAccessTimeFilled fontSize='1.7rem' color='#818B7C' />
								<Heading size='lg' color="primario">Horarios</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>Lunes a viernes, de 8:00 a 13:00 hs.</Text>
							</Stack>
						</Stack>

						<Stack bgColor='white' borderRadius={5} p={5} w='30%' shadow='md'>
							<Stack direction='row'>
								<MdGroup fontSize='1.7rem' color='#818B7C' />
								<Heading size='lg' color="primario">Visitas Grupales</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>
									Te invitamos a programar las visitas grupales llamando a (358)
									4057529.
								</Text>
							</Stack>
						</Stack>
						<Stack bgColor='white' borderRadius={5} p={5} w='30%' shadow='md'>
							<Stack direction='row'>
								<MdContactSupport fontSize='1.7rem' color='#818B7C' />
								<Heading size='lg' color="primario">Más Información</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>
									Llamanos al (358) 4057529 o escribinos a{' '}
									<Link href='mailto: museo.generaldeheza@gmail.com'>
										museo.generaldeheza@gmail.com
									</Link>
									.
								</Text>
							</Stack>
						</Stack>
						<Stack bgColor='white' borderRadius={5} p={5} w='30%' shadow='md'>
							<Stack direction='row'>
								<MdAccessibilityNew fontSize='1.7rem' color='#818B7C' />
								<Heading size='lg' color="primario">Accesibilidad</Heading>
							</Stack>
							<Stack paddingLeft={10}>
								<Text>Entrada libre y gratuita.</Text>
								<Text>WiFi libre y gratuito.</Text>
								<Text>
									Rampas desde su ingreso y con acceso a todas sus salas.
								</Text>
								<Text>Baños accesibles.</Text>
							</Stack>
						</Stack>
						<Stack borderRadius={5} w='30%' shadow='md'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d838.8329603652677!2d-63.7883881!3d-32.7569283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cdc60c379b8e8d%3A0x175a5dec928a3d76!2sCasa%20Municipal%20de%20La%20Cultura!5e0!3m2!1ses-419!2sar!4v1697378076328!5m2!1ses-419!2sar'
								allowFullScreen={true}
								height='100%'
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							></iframe>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	);
};

export default VisitaView;
