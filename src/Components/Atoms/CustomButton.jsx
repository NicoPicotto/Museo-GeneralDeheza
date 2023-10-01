import { Button } from '@chakra-ui/react';

const CustomButton = ({ children, ...props }) => {
	return (
		<Button
			variant='link'
			color='blanco'
            fontWeight="normal"
			_hover={{
				textDecoration: 'none',
				_after: {
					width: '100%',
				},
			}}
			_after={{
				content: '""',
				position: 'absolute',
				bottom: -1,
				left: '50%',
				transform: 'translateX(-50%)',
				width: '0%',
				height: '1px',
				background: 'white',
				transition: 'width 0.2s ease-in-out',
			}}
            _active={{color: "white"}}
			{...props}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
