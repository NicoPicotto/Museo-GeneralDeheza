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
} from '@chakra-ui/react';

const EventCard = ({ event }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Stack
				bg='white'
				p={4}
				spacing={5}
				borderRadius='md'
				boxShadow='md'
				whiteSpace='normal'
				minW={isMobile ? '100%' : '400px'}
				onClick={onOpen}
				cursor='pointer'
			>
				<Text as='b' color='secundario' fontSize='lg'>
					{' '}
					{event.date} - {event.title}
				</Text>
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
				<Image src={event.img} borderRadius='sm' />
			</Stack>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent minW='800px' p={5}>
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
		</>
	);
};

export default EventCard;
