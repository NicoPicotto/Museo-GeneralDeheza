import { Stack } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import ExhibicionesContainer from '../../Components/Exhibiciones/ExhibicionesContainer';
import Portada from '../../Components/Atoms/Portada';
import fondoPortada from '/assets/Portadas/exhibi.webp';

const ExhibicionesView = () => {
	return (
		<Stack>
			<Portada
				title='Exhibiciones'
				text='La cultura como creadora de identidad, como aglutinadora y catalizadora de diversidad, como generadora de especificidades locales, promotora de participación, es central en la estrategia integral de desarrollo local. Si la cultura es un eje transversal desarrollo local, el Municipio es fundamental en el desarrollo cultural de su territorio.'
				img={fondoPortada}
			/>
			<Container alignSelf="center">
				<ExhibicionesContainer />
			</Container>
		</Stack>
	);
};

export default ExhibicionesView;
