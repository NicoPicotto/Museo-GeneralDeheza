import React, { useState } from 'react';
import {
	Stack,
	Button,
	Text,
	IconButton,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
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
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import Container from '../Atoms/Container';
import CustomButton from '../Atoms/CustomButton';
import logo from '../../assets/Navbar/logo.png';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('right');
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			bgColor='primario'
			boxShadow='md'
			position='static'
			minH='5em'
			top={0}
			w='100%'
			zIndex={10}
			align='center'
		>
			<Container
				direction='row'
				justifyContent='space-between'
				alignItems='center'
			>
				{/* Logo */}
				<Link as={ReachLink} to='/' _hover={{ textDecor: 'none' }}>
					<Stack flexDir='row' align='center'>
						<Image src={logo} h={10} />

						<Text
							fontSize={['lg', 'lg', '2xl']}
							fontWeight='bold'
							color='blanco'
						>
							Museo General Deheza
						</Text>
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
							Interactuá
						</MenuButton>
						<MenuList>
							<Link as={ReachLink} to='/leer' _hover={{ textDecor: 'none' }}>
								<MenuItem>Leer</MenuItem>
							</Link>
							<Link as={ReachLink} to='/mirar' _hover={{ textDecor: 'none' }}>
								<MenuItem>Mirar</MenuItem>
							</Link>
							<Link
								as={ReachLink}
								to='/escuchar'
								_hover={{ textDecor: 'none' }}
							>
								<MenuItem>Escuchar</MenuItem>
							</Link>
						</MenuList>
					</Menu>
					<Link as={ReachLink} to='/agenda'>
						<CustomButton>Agenda</CustomButton>
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
				<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
					<DrawerOverlay>
						<DrawerContent bgColor='white'>
							<DrawerCloseButton />
							<DrawerHeader color='secundario'>
								Museo General Deheza
							</DrawerHeader>
							<DrawerBody>
								<Stack
									spacing={4}
									divider={
										<Divider
											orientation='horizontal'
											borderColor='secundario'
											borderWidth={1}
											width='100%'
										/>
									}
								>
									<Link as={ReachLink} to='/visita'>
										<Button
											w='100%'
											color='secundario'
											onClick={onClose}
											variant='ghost'
											_hover={{ bgColor: 'transparent' }}
										>
											Visita
										</Button>
									</Link>
									<Link as={ReachLink} to='/museo'>
										<Button
											w='100%'
											color='secundario'
											onClick={onClose}
											variant='ghost'
											_hover={{ bgColor: 'transparent' }}
										>
											El Museo
										</Button>
									</Link>
									<Link as={ReachLink} to='/coleccion'>
										<Button
											w='100%'
											color='secundario'
											onClick={onClose}
											variant='ghost'
											_hover={{ bgColor: 'transparent' }}
										>
											Colección
										</Button>
									</Link>
									<Link as={ReachLink} to='/leer'>
										<Button
											w='100%'
											color='secundario'
											onClick={onClose}
											variant='ghost'
											_hover={{ bgColor: 'transparent' }}
										>
											Leer
										</Button>
									</Link>
									<Link as={ReachLink} to='/mirar'>
										<Button
											w='100%'
											color='secundario'
											onClick={onClose}
											variant='ghost'
											_hover={{ bgColor: 'transparent' }}
										>
											Mirar
										</Button>
									</Link>
									<Link as={ReachLink} to='/escuchar'>
										<Button
											w='100%'
											color='secundario'
											onClick={onClose}
											variant='ghost'
											_hover={{ bgColor: 'transparent' }}
										>
											Escuchar
										</Button>
									</Link>
									<Link as={ReachLink} to='/agenda'>
										<Button
											w='100%'
											color='secundario'
											onClick={onClose}
											variant='ghost'
											_hover={{ bgColor: 'transparent' }}
										>
											Agenda
										</Button>
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
