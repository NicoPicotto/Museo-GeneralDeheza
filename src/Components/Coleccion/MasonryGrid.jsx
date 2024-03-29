/* eslint-disable react/prop-types */
import { Stack, Box, useMediaQuery } from '@chakra-ui/react';

const MasonryGrid = ({ children, ...props }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack direction='row' justify='center' w='100%' {...props} zIndex={5}>
			{Array(isMobile ? 1 : 3) // 3 columnas
				.fill(0)
				.map((_, colIndex) => (
					<Box key={colIndex} mx={2} width={isMobile ? '100%' : '33%'}>
						{children
							.filter(
								(_, itemIndex) => itemIndex % (isMobile ? 1 : 3) === colIndex
							)
							.map((child, index) => (
								<Box
									key={index}
									bgColor='white'
									mb={5}
									borderRadius={5}
									overflow='hidden'
									transition='0.2s ease'
									shadow='sm'
									cursor='pointer'
									_hover={{ transform: 'scale(1.007)', shadow: 'md' }}
								>
									{child}
								</Box>
							))}
					</Box>
				))}
		</Stack>
	);
};

export default MasonryGrid;
