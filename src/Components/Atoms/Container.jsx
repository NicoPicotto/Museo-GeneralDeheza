/* eslint-disable react/prop-types */
import { Stack } from '@chakra-ui/react';

const Container = ({ children, ...props }) => (
	<Stack
		maxWidth='1420px'
		width='100%'
		paddingBlock={5}
		paddingInline={5}
		{...props}
	>
		{children}
	</Stack>
); 

export default Container;
