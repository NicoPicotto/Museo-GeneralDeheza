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
} from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import items from './LeerList';
// import required modules
import { Navigation } from 'swiper/modules';
import './Swiper.css';

const LeerContainer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPiece, setSelectedPiece] = useState(null);

	const handleOpenModal = (piece) => {
		setSelectedPiece(piece);
		onOpen();
	};

	return (
		<Stack marginTop='-100px' paddingInline='50px'>
			<Stack
				bgColor='terciario'
				color='background'
				p={8}
				align='center'
				borderRadius={5}
				shadow='md'
			>
				<Heading>Leer</Heading>
			</Stack>

			<Swiper
				direction={'horizontal'}
				slidesPerView={3}
				spaceBetween={30}
				navigation={isMobile ? false : true}
				modules={[Navigation]}
				className='mySwiperInteractuar'
			>
				{items.map((item, index) => (
					<SwiperSlide key={index} item={item}>
						<Stack
							bgColor='white'
							p={5}
							shadow='md'
							borderRadius={5}
							margin={2}
							align='flex-start'
							cursor='pointer'
							onClick={() => handleOpenModal(item)}
						>
							<Heading size='lg'>{item.titulo}</Heading>
							<Text
								as='b'
								bgColor='secundario'
								padding='4px 6px'
								fontSize='sm'
								color='white'
								mb={2}
							>
								{item.autor}
							</Text>
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
						</Stack>
					</SwiperSlide>
				))}
			</Swiper>
			{selectedPiece && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay backdropFilter='blur(5px)' />
					<ModalContent p={3} minW='800px' h='auto'>
						<ModalCloseButton />
						<ModalBody paddingBlock={5}>
							<Heading size='md' mb={3}>
								{selectedPiece.titulo}
							</Heading>
							<Text>Por: {selectedPiece.autor}</Text>
							<Text whiteSpace="pre-line">{selectedPiece.contenido}</Text>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</Stack>
	);
};

export default LeerContainer;
