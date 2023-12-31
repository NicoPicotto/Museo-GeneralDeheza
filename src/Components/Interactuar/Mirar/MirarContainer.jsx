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
import items from './MirarList';
import { BiSolidUser, BiSolidPurchaseTag } from 'react-icons/bi';

const MirarContainer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

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
							<iframe
								width='100%'
								height='400'
								src={item.url}
								title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowfullscreen
							></iframe>

							<Heading size='md' color='primario'>
								{item.titulo}
							</Heading>
							<Stack direction='row' align='center'>
								<Stack
									direction='row'
									align='center'
									bgColor='terciario'
									paddingInline={3}
									paddingBlock={1}
									borderRadius={4}
								>
									<BiSolidPurchaseTag color='white' />
									<Text fontSize='sm' color='white'>
										{item.tag}
									</Text>
								</Stack>
							</Stack>
						</Stack>
					</GridItem>
				))}
			</Grid>
		</Stack>
	);
};

export default MirarContainer;
