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
	AspectRatio,
} from '@chakra-ui/react';
import items from './EscucharList';
import AudioCard from './AudioPlayer';
import { BiSolidUser, BiSolidPurchaseTag } from 'react-icons/bi';

const EscucharContainer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack paddingTop='25px' >
			<Grid templateColumns='repeat(2, 6fr)' gap={6} >
				{items.map((item, index) => (
					<GridItem
						key={index}
						bgColor='white'
						shadow='md'
						overflow='hidden'
						borderRadius={5}
					>
						<AudioCard
							src={item.file}
							title={item.titulo}
							autor={item.autor}
						/>
					</GridItem>
				))}
			</Grid>
		</Stack>
	);
};

export default EscucharContainer;
