import React from 'react';
import {
	Stack,
	Heading,
	Button,
	Box,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import heroImg from '/assets/Home/hero.jpg';

const Hero = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			height='calc(100vh - 5rem)'
			backgroundImage={heroImg}
			bgPos={isMobile ? 'left' : 'center'}
			backgroundSize='cover'
			justify='center'
			paddingInline={isMobile ? 10 : 20}
		>
			<Stack maxW={!isMobile && '50ch'}>
				<Heading
					color='blanco'
					size='2xl'
					textAlign={isMobile && 'center'}
					lineHeight='1.2'
					textShadow='dark-lg'
				>
					Bienvenidos al Museo de General Deheza
				</Heading>
				<Stack direction={isMobile ? 'column' : 'row'}>
					<Button
						position='relative'
						overflow='hidden'
						bgColor='blanco'
						color='secundario'
						cursor='pointer'
						width={isMobile ? '100%' : '40%'}
						shadow='md'
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
						borderColor='blanco'
						borderWidth={1}
						color='blanco'
						width={isMobile ? '100%' : '40%'}
						shadow='md'
						fontWeight='normal'
						_hover={{ bgColor: 'terciario', borderColor: 'transparent' }}
					>
						<Link as={ReachLink} to='/visita'>
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
						</Link>
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Hero;
