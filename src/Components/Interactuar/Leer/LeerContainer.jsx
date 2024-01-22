import React, { useState } from 'react';
import {
	Stack,
	Heading,
	useMediaQuery,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
	Grid,
	GridItem,
	Button,
	Divider,
} from '@chakra-ui/react';
import items from './LeerList';
import { BiSolidUser, BiSolidPurchaseTag } from 'react-icons/bi';

const LeerContainer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPiece, setSelectedPiece] = useState(null);

	const handleOpenModal = (piece) => {
		setSelectedPiece(piece);
		onOpen();
	};

	return (
		<Stack paddingTop='25px' >
			<Text fontSize='lg' as='b' textAlign='justify' >
				Trabajo realizado por Docentes y Alumnos de la Escuela “Martín Güemes”,
				dedicado a General Deheza y su gente (1987)
			</Text>
			<Text pb={10} textAlign='justify' >
				Así como cada persona tiene su historia, también un pueblo tiene la
				suya... y no hay mejor punto de partida que el testimonio de los
				verdaderos hacedores de esa historia. Porque fueron ellos, nativos e
				inmigrantes, los dos barros que se conjugaron para escribir la historia
				de General Deheza.
			</Text>
			<Grid templateColumns='repeat(2, 6fr)' gap={6} >
				{items.map((item, index) => (
					<GridItem
						key={index}
						bgColor='white'
						shadow='md'
						overflow='hidden'
						borderRadius={5}
					>
						<Stack h='100%' p={5} align='flex-start' gap={3}>
							<Heading size='md' color='primario'>
								{item.titulo}
							</Heading>
							<Stack direction='row' align='center'>
								<Stack
									direction='row'
									align='center'
									bgColor='cuarto'
									paddingInline={3}
									paddingBlock={1}
									borderRadius={4}
								>
									{' '}
									<BiSolidUser />
									<Text fontSize='sm'>{item.autor}</Text>
								</Stack>

								<Stack
									direction='row'
									align='center'
									bgColor='terciario'
									paddingInline={3}
									paddingBlock={1}
									borderRadius={4}
								>
									<BiSolidPurchaseTag color='white' />
									<Text fontSize='sm' color='white'>
										{item.categoria}
									</Text>
								</Stack>
							</Stack>

							<Divider borderColor='cuarto' />
							<Stack>
								<Text
									textAlign='left'
									lineHeight={1.2}
									fontSize='md'
									style={{
										display: '-webkit-box',
										WebkitBoxOrient: 'vertical',
										overflow: 'hidden',
										WebkitLineClamp: 5,
									}}
								>
									{item.contenido}
								</Text>
							</Stack>
							<Button
								bgColor='primario'
								mt={3}
								color='fondo'
								_hover={{ bgColor: 'terciario' }}
								onClick={() => handleOpenModal(item)}
							>
								Leer más
							</Button>
						</Stack>
					</GridItem>
				))}
			</Grid>

			{selectedPiece && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay backdropFilter='blur(5px)' />
					<ModalContent p={3} minW='800px' h='auto'>
						<ModalCloseButton />
						<ModalBody paddingBlock={5}>
							<Stack>
								<Heading size='md'>{selectedPiece.titulo}</Heading>
								<Text as='b' color='terciario' mb={2}>
									{selectedPiece.autor}
								</Text>
								<Divider borderColor='cuarto' />
								<Text whiteSpace='pre-line'>{selectedPiece.contenido}</Text>
							</Stack>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</Stack>
	);
};

export default LeerContainer;
