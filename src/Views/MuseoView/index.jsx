import React, { useState } from 'react';
import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import Sidebar from '../../Components/Atoms/Sidebar';
import Introduccion from '../../Components/Museo/Introduccion';
import LineaGeneral from '../../Components/Museo/LineaGeneral';
import { BsArrowRightShort } from 'react-icons/bs';
import LineaInstituciones from '../../Components/Museo/LineaInstituciones';

const MuseoView = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const [activeTab, setActiveTab] = useState('Introducción');

	const renderComponent = () => {
		switch (activeTab) {
			case 'Introducción':
				return <Introduccion />;
			case 'Línea de tiempo general':
				// Retorna el segundo componente
				return <LineaGeneral />;
			case 'Eje Institucional':
				// Retorna el tercer componente
				return <LineaInstituciones />;
			case 'Eje Social':
				// Retorna el cuarto componente
				return <div>Eje Social</div>;
			case 'Eje Agroindustrial':
				// Retorna el quinto componente
				return <div>Eje Agroindustrial</div>;
			default:
				return <Introduccion />;
		}
	};

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			spacing={0}
			height='calc(100vh - 5rem)'
		>
			<Sidebar title='Historia del museo'>
				<Stack spacing={5}>
					{[
						'Introducción',
						'Línea de tiempo general',
						'Eje Institucional',
						'Eje Social',
						'Eje Agroindustrial',
					].map((tab) => (
						<Stack
							direction='row'
							align='center'
							_hover={{ marginLeft: 2 }}
							transition='0.2s ease'
						>
							<BsArrowRightShort color='white' />
							<Text
								key={tab}
								color='fondo'
								fontSize='lg'
								onClick={() => setActiveTab(tab)}
								cursor='pointer'
								textDecoration={activeTab === tab ? 'underline' : 'none'}
								as={activeTab === tab ? 'b' : 'none'}
							>
								{tab}
							</Text>
						</Stack>
					))}
				</Stack>
			</Sidebar>
			{renderComponent()}
		</Stack>
	);
};

export default MuseoView;
