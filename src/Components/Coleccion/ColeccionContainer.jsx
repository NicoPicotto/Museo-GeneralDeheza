import React, { useState } from 'react';
import {
	Image,
	Heading,
	Text,
	Modal,
	Stack,
	Box,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
} from '@chakra-ui/react';
import MasonryGrid from './MasonryGrid';
import items from './ColeccionList';

const ColeccionContainer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPiece, setSelectedPiece] = React.useState(null);

	const handleOpenModal = (piece) => {
		setSelectedPiece(piece);
		onOpen();
	};

	return (
		<>
			<MasonryGrid>
				{items.map((piece, index) => (
					<Stack onClick={() => handleOpenModal(piece)}>
						<Image
							key={index}
							src={piece.img}
							alt={piece.titulo}
							w='100%'
							objectFit='cover'
						/>
						<Heading paddingInline={5} paddingTop={5}>
							{piece.titulo}
						</Heading>
						<Text paddingInline={5} paddingBlock={5}>
							{piece.descripcion}
						</Text>
					</Stack>
				))}
			</MasonryGrid>

			{selectedPiece && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay backdropFilter='blur(5px)' />
					<ModalContent p={3} minW='800px' h='auto'>
						<ModalCloseButton />
						<ModalBody paddingBlock={5}>
							<Stack direction='row' spacing={5}>
								<Stack minW='400px'>
									<Image
										src={selectedPiece.img}
										alt={selectedPiece.alt}
										borderRadius={5}
									/>
								</Stack>
								<Stack>
									<Heading size='md' mb={3}>
										{selectedPiece.titulo}
									</Heading>
									<Text>{selectedPiece.descripcion}</Text>
								</Stack>
							</Stack>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</>
	);
};

export default ColeccionContainer;
