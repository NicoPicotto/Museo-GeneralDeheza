import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import HomeView from './Views/HomeView';
import Navbar from './Components/Navbar';
import VisitaView from './Views/VisitaView';
import EscucharView from './Views/EscucharView';
import ColeccionView from './Views/ColeccionView';
import HistoriaView from './Views/HistoriaView';
import LineaDeTiempoView from './Views/LineaDeTiempoView';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomeView />} />
					<Route path='/visita' element={<VisitaView />} />
					<Route path='/historia' element={<HistoriaView />} />
					<Route path='/linea-de-tiempo' element={<LineaDeTiempoView />} />
					<Route path='/coleccion' element={<ColeccionView />} />
					<Route path='/escuchar' element={<EscucharView />} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
};

export default App;
