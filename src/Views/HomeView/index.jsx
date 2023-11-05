import React from 'react';
import {
	Stack,
	Heading,
	Box,
	useMediaQuery,
	Button,
	Link,
} from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import { Link as ReachLink } from 'react-router-dom';
import heroImg from '/assets/Home/hero.jpg';

const HomeView = () => {
	const [isMobile] = useMediaQuery('(max-width: 800px)');

	return (
		<Stack
			align='center'
			backgroundImage={heroImg}
			bgPos={isMobile ? 'left' : 'center'}
			backgroundSize='cover'
			paddingTop='5em'
			height='100vh'
		>
			<Container
				h='100%'
				justify='center'
				paddingInline={isMobile ? 5 : 0}
				paddingBlock={isMobile ? 5 : 0}
			>
				<Stack
					maxW={!isMobile && '70ch'}
					position='relative'
					h='100%'
					justify='center'
				>
					<Stack
						position='absolute'
						h='100%'
						w='100%'
						bgColor='terciario'
						mixBlendMode='multiply'
					/>
					<Stack p={10}>
						<Heading
							color='blanco'
							size='2xl'
							textAlign={isMobile && 'center'}
							lineHeight='1.2'
							textShadow='2px 2px 5px #4C5249'
							marginBottom={5}
							zIndex={5}
						>
							Bienvenidos al Museo de General Deheza
						</Heading>
						<Stack direction={isMobile ? 'column' : 'row'}>
							<Button
								position='relative'
								overflow='hidden'
								bgColor='blanco'
								color='terciario'
								cursor='pointer'
								width={isMobile ? '100%' : '40%'}
								shadow='md'
								_hover={{ bgColor: 'secundario' }}
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
										color='primario'
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
								_hover={{ bgColor: 'secundario', borderColor: 'transparent' }}
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
											color='primario'
										>
											Mirá nuestros datos
										</Box>
									</Stack>
								</Link>
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	);
};

export default HomeView;
