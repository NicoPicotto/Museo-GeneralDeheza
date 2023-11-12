import React, { useState } from 'react';
import {
	Image,
	Modal,
	Stack,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
} from '@chakra-ui/react';
import MasonryGrid from '../Coleccion/MasonryGrid';
import fotos from './ItapuList';

const ExhibicionMasonry = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPiece, setSelectedPiece] = useState(null);

	const handleOpenModal = (piece) => {
		setSelectedPiece(piece);
		onOpen();
	};

	return (
		<Stack width='100%'>
			<MasonryGrid>
				{fotos.map((piece, index) => (
					<Stack onClick={() => handleOpenModal(piece)} key={index}>
						<Image src={piece} w='100%' objectFit='cover' />
					</Stack>
				))}
			</MasonryGrid>

			{selectedPiece && (
				<Modal isOpen={isOpen} onClose={onClose} size='5xl' p={0}>
					<ModalOverlay backdropFilter='blur(5px)' />
					<ModalContent>
						<ModalCloseButton color='primario' />
						<ModalBody p={0}>
							<Image src={selectedPiece} />
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</Stack>
	);
};

export default ExhibicionMasonry;
