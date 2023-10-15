import { extendTheme } from '@chakra-ui/react';

const colors = {
	primario: '#A65858',
	secundario: '#A66A65',
	terciario: '#828C7D',
	cuarto: '#D9C49C',
	fondo: '#F2F2F2',
	blanco: '#fff',
	negro: '#1F1F1F',
};

const styles = {
	global: {
		html: {
			bgColor: '#F2F2F2',
			margin: 0,
			padding: 0,
		},
		body: {
			bgColor: '#F2F2F2',
			margin: 0,
			padding: 0,
		},
	},
};

const fonts = {
	heading: 'Josefin Sans',
	body: 'Josefin Sans',
};

const theme = extendTheme({ colors, styles, fonts });

export default theme;
