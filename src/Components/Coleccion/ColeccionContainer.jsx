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
import { BiSolidUser } from 'react-icons/bi';
import items from './ColeccionList';
import { BsCalendar2DateFill } from 'react-icons/bs';

const ColeccionContainer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPiece, setSelectedPiece] = useState(null);

	const handleOpenModal = (piece) => {
		setSelectedPiece(piece);
		onOpen();
	};

	return (
		<Stack width='100%'>
			<MasonryGrid mt='-50px'>
				{items.map((piece, index) => (
					<Stack onClick={() => handleOpenModal(piece)} key={index}>
						<Image
							key={index}
							src={piece.img}
							alt={piece.titulo}
							w='100%'
							objectFit='cover'
						/>
						<Heading paddingInline={5} paddingBlock={3} color='primario'>
							{piece.titulo}
						</Heading>
						<Stack
							direction='row'
							align='center'
							paddingBottom={5}
							paddingInline={5}
						>
							{piece.date && (
								<Stack
									direction='row'
									align='center'
									bgColor='secundario'
									paddingInline={3}
									paddingBlock={1}
									borderRadius={4}
								>
									{' '}
									<BsCalendar2DateFill />
									<Text fontSize='sm'>{piece.date}</Text>
								</Stack>
							)}
							{piece.donador && (
								<Stack
									direction='row'
									align='center'
									bgColor='secundario'
									paddingInline={3}
									paddingBlock={1}
									borderRadius={4}
								>
									{' '}
									<BiSolidUser />
									<Text fontSize='sm'>{piece.donador}</Text>
								</Stack>
							)}
						</Stack>
					</Stack>
				))}
			</MasonryGrid>

			{selectedPiece && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay backdropFilter='blur(5px)' />
					<ModalContent p={3} minW='800px' h='auto'>
						<ModalCloseButton _focusVisible='none' />
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
									<Stack>
										<Heading size='md'>{selectedPiece.titulo}</Heading>
										<Text>{selectedPiece.descripcion}</Text>
									</Stack>
									<Stack direction='row' align='center' paddingBottom={5}>
										<Stack
											direction='row'
											align='center'
											bgColor='secundario'
											paddingInline={3}
											paddingBlock={1}
											borderRadius={4}
										>
											{' '}
											<BsCalendar2DateFill />
											<Text fontSize='sm'>{selectedPiece.date}</Text>
										</Stack>
										<Stack
											direction='row'
											align='center'
											bgColor='secundario'
											paddingInline={3}
											paddingBlock={1}
											borderRadius={4}
										>
											{' '}
											<BiSolidUser />
											<Text fontSize='sm'>{selectedPiece.donador}</Text>
										</Stack>
									</Stack>
								</Stack>
							</Stack>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</Stack>
	);
};

export default ColeccionContainer;
