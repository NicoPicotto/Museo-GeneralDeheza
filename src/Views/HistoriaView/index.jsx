import { Stack, useMediaQuery } from "@chakra-ui/react";
import Introduccion from "../../Components/Museo/Introduccion";
import Container from "../../Components/Atoms/Container";
import fondoPortada from "/assets/Portadas/historia.jpg";
import Portada from "../../Components/Atoms/Portada";

const HistoriaView = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack>
         <Portada
            title='Historia'
            text='Remontamos a los orígenes del edificio de nuestra Casa de la Cultura hasta la creación del Museo de General Deheza.'
            img={fondoPortada}
            bgSize="contain"
            bgPos="top"
         />
         <Container alignSelf='center'>
            <Introduccion />
         </Container>
      </Stack>
   );
};

export default HistoriaView;
