import {
	Text,
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Stack,
	Image,
	Divider,
	useMediaQuery,
	Heading,
	Tooltip,
} from '@chakra-ui/react';

const EventCard = ({ event }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Stack w='100%' align='center' pt={10}>
			<Tooltip
				label='Hacé click para ver más'
				hasArrow
				bg='terciario'
				placement='top'
			>
				<Stack
					w={isMobile ? '100%' : '50%'}
					bgColor='white'
					shadow='md'
					p={5}
					borderRadius={10}
					onClick={onOpen}
				>
					<Heading size='lg' color='terciario'>
						{' '}
						{event.date} - {event.title}
					</Heading>
					<Divider borderColor='cuarto' />
					<Text
						textAlign='justify'
						lineHeight={1.3}
						whiteSpace='pre-line'
						style={{
							display: '-webkit-box',
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
							WebkitLineClamp: event.img ? 5 : 15,
						}}
					>
						{event.description}
					</Text>
					{event.img && (
						<Image maxHeight='400px' src={event.img} borderRadius='sm' />
					)}
				</Stack>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent minW={isMobile ? '100%' : '800px'} p={5}>
					<ModalHeader color='primario'>
						{event.date} - {event.title}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody textAlign='justify' lineHeight={1.3} whiteSpace='pre-line'>
						{event.description}
					</ModalBody>
					<Image src={event.img} borderRadius='md' p={5} />
				</ModalContent>
			</Modal>
		</Stack>
	);
};

export default EventCard;
