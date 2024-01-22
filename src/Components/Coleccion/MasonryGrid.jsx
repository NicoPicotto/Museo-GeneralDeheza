/* eslint-disable react/prop-types */
import { Stack, Box } from '@chakra-ui/react';

const MasonryGrid = ({ children, ...props }) => {
	return (
		<Stack
			direction='row'
			justify='center'
			w='100%'
			
			{...props}
		>
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
