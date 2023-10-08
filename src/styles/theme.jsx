import { extendTheme } from '@chakra-ui/react';

const colors = {
	primario: '#59573B',
	secundario: '#40342A',
	terciario: '#71734C',
	cuarto: '#736048',
	fondo: 'lightgray',
	blanco: '#fff',
	negro: '#BEBDBF',
};

const styles = {
	global: {
		html: {
			bgColor: 'lightgray',
			margin: 0,
			padding: 0,
		},
		body: {
			bgColor: 'lightgray',
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
