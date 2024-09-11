import {
   useLocation,
   BrowserRouter as Router,
   Route,
   Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import HomeView from "./Views/HomeView";
import Navbar from "./Components/Navbar";
import VisitaView from "./Views/VisitaView";
import EscucharView from "./Views/EscucharView";
import ColeccionView from "./Views/ColeccionView";
import HistoriaView from "./Views/HistoriaView";
import LineaDeTiempoView from "./Views/LineaDeTiempoView";
import EjesView from "./Views/EjesView";
import ExhibicionesView from "./Views/ExhibicionesListView";
import InteractuarView from "./Views/InteractuarView";
import ExhibicionTecnico from "./Views/ExhibicionesListView/ExhibicionTecnico";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ExhibicionPatronalesView from "./Views/ExhibicionesListView/ExhibicionPatronales";
import ExhibicionMalvinas from "./Views/ExhibicionesListView/ExhibicionMalvinas";
import Footer from "./Components/Footer";
import DiaIndustriaView from "./Views/DiaIndustria";

const MainContent = () => {
   const location = useLocation();
   const hideFooterPaths = ["/"]; // Paths where the footer should be hidden

   return (
      <>
         <ScrollToTop />
         <Navbar />
         <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/visita' element={<VisitaView />} />
            <Route path='/historia' element={<HistoriaView />} />
            <Route path='/linea-de-tiempo' element={<LineaDeTiempoView />} />
            <Route path='/ejes' element={<EjesView />} />
            <Route path='/coleccion' element={<ColeccionView />} />
            <Route path='/exhibiciones' element={<ExhibicionesView />} />
            <Route path='/exhibiciones/itapu' element={<ExhibicionTecnico />} />
            <Route
               path='/exhibiciones/ex-combatientes'
               element={<ExhibicionMalvinas />}
            />
            <Route
               path='/exhibiciones/patronales'
               element={<ExhibicionPatronalesView />}
            />
            <Route path='/interactuar' element={<InteractuarView />} />
            <Route path='/escuchar' element={<EscucharView />} />
            <Route path='/dia-industria' element={<DiaIndustriaView />} />
         </Routes>
         {/* {!hideFooterPaths.includes(location.pathname) && <Footer />} */}
      </>
   );
};

const App = () => {
   return (
      <ChakraProvider theme={theme}>
         <Router>
            <MainContent />
         </Router>
      </ChakraProvider>
   );
};

export default App;
