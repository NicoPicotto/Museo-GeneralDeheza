import { Stack, useMediaQuery } from "@chakra-ui/react";
import Container from "../../Components/Atoms/Container";
import Portada from "../../Components/Atoms/Portada";
import fondoPortada from "/assets/Portadas/intractuar.jpg";
import Interactua from "../../Components/Interactuar";

const InteractuarView = () => {
   const [isMobile] = useMediaQuery("(max-width: 1600px)");

   return (
      <Stack justify='center'>
         <Portada
            title='Interactuá'
            text='Para leer, mirar y escuchar.'
            img={fondoPortada}
         />
         <Container alignSelf='center'>
            <Interactua />
         </Container>
      </Stack>
   );
};

export default InteractuarView;
