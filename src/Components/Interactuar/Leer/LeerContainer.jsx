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
		<Stack paddingTop='25px' paddingInline='50px'>
			<Grid templateColumns='repeat(2, 6fr)' gap={6} paddingInline='50px'>
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
									<Text fontSize='sm' as='i'>
										{item.autor}
									</Text>
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
									<Text fontSize='sm' as='i' color='white'>
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
