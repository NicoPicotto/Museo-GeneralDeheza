import React from 'react';
import { Stack, Heading, Button, Box } from '@chakra-ui/react';
import heroImg from '../../assets/Home/hero.jpg';

const Hero = () => {
	return (
		<Stack
			height='500px'
			backgroundImage={heroImg}
			bgPos='center'
			backgroundSize='cover'
			justify='center'
			paddingInline={20}
		>
			<Stack maxW='50ch'>
				<Heading
					color='blanco'
					size='2xl'
					lineHeight='1.2'
					textShadow='dark-lg'
				>
					Bienvenidos al Museo de General Deheza
				</Heading>
				<Stack direction='row'>
					<Button
						position='relative'
						overflow='hidden'
						bgColor='blanco'
						color='secundario'
                        cursor="pointer"
						width='40%'
                        shadow="md"
						_hover={{ bgColor: 'terciario' }}
					>
						<Stack
							spacing={0}
							position='absolute'
							top='0'
							left='0'
							right='0'
							height='200%'
							transition='transform 0.3s'
							_hover={{ transform: 'translateY(-50%)' }}
						>
							{/* Original Text */}
							<Box
								height='100%'
								display='flex'
								alignItems='center'
								justifyContent='center'
							>
								Conocé más
							</Box>
							<Box
								height='100%'
								display='flex'
								alignItems='center'
								justifyContent='center'
								color='blanco'
							>
								Explorá ahora
							</Box>
						</Stack>
					</Button>
					<Button
						position='relative'
						overflow='hidden'
						bgColor='transparent'
                        borderColor="blanco"
                        borderWidth={1}
						color='blanco'
						width='40%'
                        shadow="md"
                        fontWeight="normal"
						_hover={{ bgColor: 'terciario', borderColor:"transparent" }}
					>
						<Stack
							spacing={0}
							position='absolute'
							top='0'
							left='0'
							right='0'
							height='200%'
							transition='transform 0.3s'
							_hover={{ transform: 'translateY(-50%)' }}
						>
							{/* Original Text */}
							<Box
								height='100%'
								display='flex'
								alignItems='center'
								justifyContent='center'
							>
								Quiero hacer una visita
							</Box>
							<Box
								height='100%'
								display='flex'
								alignItems='center'
								justifyContent='center'
								color='blanco'
							>
								Mirá nuestros datos
							</Box>
						</Stack>
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Hero;
