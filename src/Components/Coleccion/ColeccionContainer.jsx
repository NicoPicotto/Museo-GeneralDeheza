import { useState } from 'react';
import {
	Image,
	Heading,
	Text,
	Modal,
	Stack,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';
import MasonryGrid from './MasonryGrid';
import { BiSolidUser } from 'react-icons/bi';
import items from './ColeccionList';
import { BsCalendar2DateFill } from 'react-icons/bs';

const ColeccionContainer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPiece, setSelectedPiece] = useState(null);
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const handleOpenModal = (piece) => {
		setSelectedPiece(piece);
		onOpen();
	};

	return (
		<Stack width='100%'>
			<MasonryGrid mt='-50px'>
				{items.map((piece, index) => (
					<Stack
						pointerEvents={isMobile && 'none'}
						onClick={() => handleOpenModal(piece)}
						key={index}
						gap={3}
					>
						<Image
							key={index}
							src={piece.img}
							alt={piece.titulo}
							w='100%'
							objectFit='cover'
						/>
						<Heading paddingInline={5} size='lg' color='primario'>
							{piece.titulo}
						</Heading>
						<Text
							display={!piece.descripcion && 'none'}
							paddingInline={5}
							pb={2}
						>
							{piece.descripcion}
						</Text>
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
					<ModalContent minW='800px' h='auto'>
						<ModalCloseButton _focusVisible='none' color='white' />
						<ModalBody p={0}>
							<Stack>
								<Image
									src={selectedPiece.img}
									alt={selectedPiece.alt}
									overflow='hidden'
									borderTopRadius={4}
								/>
								<Stack paddingInline={5} paddingBlock={3} mb={2}>
									<Stack>
										<Heading size='md'>{selectedPiece.titulo}</Heading>
										<Text>{selectedPiece.descripcion}</Text>
									</Stack>
									<Stack direction='row' align='center'>
										{selectedPiece.date && (
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
										)}
										{selectedPiece.donador && (
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
										)}
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
