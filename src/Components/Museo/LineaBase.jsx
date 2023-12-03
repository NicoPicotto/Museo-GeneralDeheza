import React, { useState } from 'react';
import {
	Flex,
	Box,
	Text,
	useMediaQuery,
	Stack,
	Heading,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './linea.css';

// import required modules
import { Mousewheel, Navigation } from 'swiper/modules';

const LineaBase = ({ events }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPiece, setSelectedPiece] = useState(null);

	const handleOpenModal = (piece) => {
		setSelectedPiece(piece);
		onOpen();
	};
	return (
		<Stack mt='-10px'>
			<Swiper
				direction={'horizontal'}
				slidesPerView={4}
				spaceBetween={0}
				mousewheel={true}
				modules={[Mousewheel, Navigation]}
				className='mySwiper'
			>
				{events.map((data, index) => (
					<SwiperSlide key={index}>
						<Stack
							align='center'
							bgColor='white'
							shadow='md'
							p={5}
							transition='0.2s ease'
							_hover={{ shadow: 'lg', mt: -1 }}
							cursor='pointer'
							marginBlock={4}
							onClick={() => handleOpenModal(data)}
						>
							<Heading color='terciario'>{data.date}</Heading>
							<Box
								position='relative'
								bgColor='cuarto'
								w='95%'
								h='20px'
								mb='10px'
								_after={{
									content: '""',
									position: 'absolute',
									right: '-10px',
									top: '0',
									borderWidth: '10px 0 10px 10px',
									borderColor: 'transparent transparent transparent #D9C49C',
									borderStyle: 'solid',
								}}
							/>
							<Stack>
								<Heading
									noOfLines={1} // Límite de líneas
									overflow='hidden'
									textOverflow='ellipsis'
									display='-webkit-box'
									size='md'
								>
									{data.title}
								</Heading>
								<Text
									noOfLines={4} // Límite de líneas
									overflow='hidden'
									textOverflow='ellipsis'
									display='-webkit-box'
								>
									{data.content}
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
							<Stack>
								<Heading size='md'>
									{selectedPiece.date} - {selectedPiece.title}
								</Heading>
								<Text whiteSpace='pre-line'>{selectedPiece.content}</Text>
								<Image src={selectedPiece.image} />
							</Stack>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</Stack>
	);
};

export default LineaBase;
