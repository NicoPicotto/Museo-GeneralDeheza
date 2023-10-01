import { extendTheme } from '@chakra-ui/react';

const colors = {
		primario: '#59573B',
		secundario: '#40342A',
		terciario: '#736048',
		fondo: 'lightgray',
		blanco: '#fff',
		negro: '#BEBDBF',
};

const styles = {
	global: {
		html: {
			bgColor: 'lightgray',
		},
	},
};

const fonts = {
	heading: 'Josefin Sans',
	body: 'Josefin Sans',
};

const theme = extendTheme({ colors, styles, fonts });

export default theme;
