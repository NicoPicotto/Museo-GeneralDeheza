import { Stack } from "@chakra-ui/react";
import Container from "../../Components/Atoms/Container";
import ColeccionContainer from "../../Components/Coleccion/ColeccionContainer";
import Portada from "../../Components/Atoms/Portada";
import fondoPortada from "/assets/Portadas/coleccion.webp";

const ColeccionView = () => {
   return (
      <Stack justify='center'>
         <Portada
            title='Colección'
            text='La colección actual se conforma gracias a las donaciones y préstamos de nuestros vecinos de General Deheza.'
            img={fondoPortada}
         />
         <Container alignSelf='center'>
            <ColeccionContainer />
         </Container>
      </Stack>
   );
};

export default ColeccionView;
