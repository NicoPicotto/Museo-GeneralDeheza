import { useState } from 'react';
import {
	Stack,
	Button,
	IconButton,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Divider,
	Link,
	Image,
	useMediaQuery,
	Heading,
	Text,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import Container from '../Atoms/Container';
import CustomButton from '../Atoms/CustomButton';
import logo from '/assets/Navbar/logo2.png';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement] = useState('right');
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			bgColor='transparent'
			position='fixed'
			minH='5em'
			top={0}
			w='100%'
			zIndex={30}
			align='center'
			backdropFilter='blur(5px)'
		>
			<Stack
				position='absolute'
				bgColor='black'
				w='100%'
				h='100%'
				opacity='0.5'
				zIndex={-1}
			></Stack>
			<Container
				direction='row'
				justifyContent='space-between'
				alignItems='center'
			>
				{/* Logo */}
				<Link as={ReachLink} to='/' _hover={{ textDecor: 'none' }}>
					<Stack flexDir='row' align='center'>
						<Image src={logo} h={10} />

						<Heading
							fontSize={['lg', 'lg', '2xl']}
							fontWeight='bold'
							color='blanco'
						>
							Museo General Deheza
						</Heading>
					</Stack>
				</Link>

				{/* Buttons - Desktop */}
				<Stack
					direction={isMobile ? 'column' : 'row'}
					display={isMobile ? 'none' : 'flex'}
					spacing={5}
					zIndex={100}
					divider={
						<Divider
							orientation='vertical'
							borderColor='lightgray'
							borderWidth={1}
							height={5}
						/>
					}
				>
					<Link as={ReachLink} to='/visita'>
						<CustomButton>Visita</CustomButton>
					</Link>
					<Menu>
						<MenuButton
							as={Button}
							variant='link'
							color='blanco'
							fontWeight='normal'
							_hover={{
								textDecoration: 'none',
								_after: {
									width: '100%',
								},
							}}
							_after={{
								content: '""',
								position: 'absolute',
								bottom: 0,
								left: '50%',
								transform: 'translateX(-50%)',
								width: '0%',
								height: '1px',
								background: 'white',
								transition: 'width 0.2s ease-in-out',
							}}
							_active={{ color: 'white' }}
							rightIcon={<MdArrowDropDown />}
						>
							El Museo
						</MenuButton>
						<MenuList>
							<Link
								as={ReachLink}
								to='/historia'
								_hover={{ textDecor: 'none' }}
							>
								<MenuItem>Historia</MenuItem>
							</Link>
							<Link
								as={ReachLink}
								to='/linea-de-tiempo'
								_hover={{ textDecor: 'none' }}
							>
								<MenuItem>Línea de tiempo</MenuItem>
							</Link>
							<Link as={ReachLink} to='/ejes' _hover={{ textDecor: 'none' }}>
								<MenuItem>Ejes</MenuItem>
							</Link>
						</MenuList>
					</Menu>
					<Link as={ReachLink} to='/coleccion'>
						<CustomButton>Colección</CustomButton>
					</Link>
					<Link as={ReachLink} to='/exhibiciones'>
						<CustomButton>Exhibiciones</CustomButton>
					</Link>
					<Link as={ReachLink} to='/interactuar'>
						<CustomButton>Interactua</CustomButton>
					</Link>
				</Stack>

				{/* Hamburger - Mobile */}
				<IconButton
					display={isMobile ? 'flex' : 'none'}
					aria-label='Open menu'
					fontSize='20px'
					variant='outline'
					colorScheme='whiteAlpha'
					icon={<RiMenu3Line />}
					onClick={onOpen}
				/>

				{/* Drawer for mobile */}
				<Drawer
					placement={placement}
					onClose={onClose}
					isOpen={isOpen}
					size='full'
				>
					<DrawerOverlay>
						<DrawerContent bgColor='primario'>
							<DrawerCloseButton color='blanco' size="lg" />
							<DrawerBody>
								<Stack
									h='100%'
									justify='space-around'
									align='center'
									paddingBlock='20%'
									divider={<Divider borderColor='terciario' />}
								>
									<Link
										as={ReachLink}
										to='/visita'
										onClick={onClose}
										_hover={{ textDecor: 'none' }}
									>
										<Text fontSize='2xl' color='blanco'>
											Visita
										</Text>
									</Link>
									<Link
										as={ReachLink}
										to='/historia'
										onClick={onClose}
										_hover={{ textDecor: 'none' }}
									>
										<Text fontSize='2xl' color='blanco'>
											Historia
										</Text>
									</Link>
									<Link
										as={ReachLink}
										to='/linea-de-tiempo'
										onClick={onClose}
										_hover={{ textDecor: 'none' }}
									>
										<Text fontSize='2xl' color='blanco'>
											Línea de Tiempo
										</Text>
									</Link>
									<Link
										as={ReachLink}
										to='/ejes'
										onClick={onClose}
										_hover={{ textDecor: 'none' }}
									>
										<Text fontSize='2xl' color='blanco'>
											Ejes
										</Text>
									</Link>

									<Link
										as={ReachLink}
										to='/coleccion'
										onClick={onClose}
										_hover={{ textDecor: 'none' }}
									>
										<Text fontSize='2xl' color='blanco'>
											Colección
										</Text>
									</Link>
									<Link
										as={ReachLink}
										to='/exhibiciones'
										onClick={onClose}
										_hover={{ textDecor: 'none' }}
									>
										<Text fontSize='2xl' color='blanco'>
											Exhibiciones
										</Text>
									</Link>
									<Link
										as={ReachLink}
										to='/interactuar'
										onClick={onClose}
										_hover={{ textDecor: 'none' }}
									>
										<Text fontSize='2xl' color='blanco'>
											Interactua
										</Text>
									</Link>
								</Stack>
							</DrawerBody>
							<DrawerFooter></DrawerFooter>
						</DrawerContent>
					</DrawerOverlay>
				</Drawer>
			</Container>
		</Stack>
	);
};

export default Navbar;
