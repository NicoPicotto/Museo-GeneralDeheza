import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  Stack,
  TabPanel,
  TabPanels,
  Text,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import LineaBase from "./LineaBase";
import instituciones from "../DatosLineas/DatosLineaInstituciones";
import SocialRamosGenerales from "./SocialRamosGenerales";
import fotos from "../DatosLineas/AgroList";
import SwiperExhibiciones from "../Exhibiciones/SwiperExhibiciones";

const Ejes = () => {
  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  return (
    <Stack>
      <Tabs
        position='relative'
        variant='unstyled'
        w='100%'
        align='center'
        overflow='hidden'
      >
        <TabList
          gap={isMobile ? 2 : 10}
          color='negro'
          flexDir={isMobile ? "column" : "row"}
        >
          <Tab _selected={isMobile && { bgColor: "terciario", color: "fondo" }}>
            <Heading size='lg'>Instituciones</Heading>
          </Tab>
          <Tab _selected={isMobile && { bgColor: "terciario", color: "fondo" }}>
            <Heading size='lg'>Agroindustria</Heading>
          </Tab>
          <Tab _selected={isMobile && { bgColor: "terciario", color: "fondo" }}>
            <Heading size='lg'>Lo Social</Heading>
          </Tab>
        </TabList>
        <TabIndicator
          display={isMobile && "none"}
          mt='-1.5px'
          height='2px'
          bg='cuarto'
          borderRadius='1px'
        />
        <TabPanels>
          <TabPanel>
            <Stack spacing={10}>
              <Text fontSize='lg' textAlign='justify'>
                Toda institución nace como consecuencia de una acción
                aglutinante en pro de un proyecto compartido. Si consideramos
                este concepto tal vez comprendamos que no fue casual que las
                primeras instituciones dehecinas fueran basadas en la necesidad
                de fe, de integración, de conocimiento y trabajo. En la línea de
                tiempo se ordenaron las instituciones educativas y sociales,
                según la antigüedad de su primera entidad cuyo año de fundación
                y nombre a continuación se detalla.
              </Text>
              <LineaBase events={instituciones} />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack pt={10}>
              <SwiperExhibiciones fotos={fotos} />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={10}>
              <Text fontSize='lg' textAlign='justify'>
                La división de la historia de General Deheza en tres ejes nos
                permite elaborar una narración más comprensible. Como
                mencionamos anteriormente, el primer eje abarca la constitución
                de las instituciones; el segundo eje abarca el desarrollo
                económico (Agro-Industria) y por último, el tercer eje abarca lo
                social, es decir, el crecimiento de la comunidad, sus
                tradiciones y costumbres. En nuestro museo, decidimos imitar los
                almacenes llamados Ramos Generales para interiorizarnos en las
                antiguas formas de comercializar.
              </Text>
              <SocialRamosGenerales />
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Ejes;
