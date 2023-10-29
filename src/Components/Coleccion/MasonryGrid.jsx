import React from 'react';
import { Stack, Box } from '@chakra-ui/react';

const MasonryGrid = ({ children }) => {
	return (
		<Stack direction='row' justify='center'>
			{Array(3) // 3 columnas
				.fill(0)
				.map((_, colIndex) => (
					<Box key={colIndex} mx={2} width='33%'>
						{children
							.filter((_, itemIndex) => itemIndex % 3 === colIndex)
							.map((child, index) => (
								<Box
									key={index}
									bgColor='white'
									mb={5}
									borderRadius={5}
									overflow='hidden'
									transition='0.2s ease'
									shadow='md'
									cursor='pointer'
									_hover={{ transform: 'scale(1.01)', shadow: 'lg' }}
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
