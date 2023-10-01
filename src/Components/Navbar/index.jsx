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
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import Container from '../Atoms/Container';
import CustomButton from '../Atoms/CustomButton';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('right');

	return (
		<Stack bgColor='primario'>
			<Container
				direction={['row', 'row', 'row']}
				justifyContent='space-between'
				alignItems='center'
				paddingBlock={5}
				paddingInline={8}
				boxShadow='md'
			>
				{/* Logo */}
				<Link as={ReachLink} to='/' _hover={{ textDecor: 'none' }}>
					<Text fontSize={['lg', 'lg', '2xl']} fontWeight='bold' color='blanco'>
						Museo General Deheza
					</Text>
				</Link>

				{/* Buttons - Desktop */}
				<Stack
					direction={['column', 'row', 'row']}
					display={['none', 'none', 'flex']}
					spacing={5}
					divider={
						<Divider
							orientation='vertical'
							borderColor='fondo'
							borderWidth={1}
							height={5}
						/>
					}
				>
					<Link as={ReachLink} to='/visita'>
						<CustomButton>Visita</CustomButton>
					</Link>
					<Link as={ReachLink} to='/museo'>
						<CustomButton>El Museo</CustomButton>
					</Link>
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
								height: '2px',
								background: 'white',
								transition: 'width 0.2s ease-in-out',
							}}
							_active={{ color: 'white' }}
							rightIcon={<MdArrowDropDown />}
						>
							Interactuá
						</MenuButton>
						<MenuList>
							<Link as={ReachLink} to='/leer'>
								<MenuItem>Leer</MenuItem>
							</Link>
							<Link as={ReachLink} to='/mirar'>
								<MenuItem>Mirar</MenuItem>
							</Link>
							<Link as={ReachLink} to='/escuchar'>
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
					display={['flex', 'flex', 'none']}
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
						<DrawerContent bgColor='fondo'>
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
                                            _hover={{bgColor: "transparent"}}
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
                                            _hover={{bgColor: "transparent"}}
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
                                            _hover={{bgColor: "transparent"}}
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
                                            _hover={{bgColor: "transparent"}}
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
                                            _hover={{bgColor: "transparent"}}
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
                                            _hover={{bgColor: "transparent"}}
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
                                            _hover={{bgColor: "transparent"}}
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
