import { Stack, useMediaQuery } from "@chakra-ui/react";
import Container from "../../Components/Atoms/Container";

import Ejes from "../../Components/Museo/Ejes";
import Portada from "../../Components/Atoms/Portada";
import fondoPortada from "/assets/Portadas/ejes.webp";

const EjesView = () => {
  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  return (
    <Stack justify='center'>
      <Portada
        title='Ejes'
        text='El museo está ordenado de una manera específica para mejorar su comprensión, es decir, organizamos la historia de General Deheza en tres ejes: las instituciones, lo agroindustrial y lo social.'
        img={fondoPortada}
      />
      <Container alignSelf='center'>
        <Ejes />
      </Container>
    </Stack>
  );
};

export default EjesView;
