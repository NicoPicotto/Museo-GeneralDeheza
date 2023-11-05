import { extendTheme } from '@chakra-ui/react';

const colors = {
	primario: '#4C5249',
	secundario: '#D3E4CB',
	terciario: '#818B7C',
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
	heading: `'Montserrat', sans-serif;`,
	body: `'PT Sans', sans-serif;`,
};

const theme = extendTheme({ colors, styles, fonts });

export default theme;
