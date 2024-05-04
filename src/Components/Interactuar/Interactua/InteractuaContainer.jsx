import { useState } from "react";
import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Image,
  Spinner,
  Tag,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import ReactCompareImage from "react-compare-image";
import img1 from "/assets/Interactuar/15-8.jpg";
import img1c from "/assets/Interactuar/15-8c.jpg";
import img2 from "/assets/Interactuar/1913.jpg";
import img2c from "/assets/Interactuar/1913c.jpg";
import img3 from "/assets/Interactuar/Agr.jpg";
import img3c from "/assets/Interactuar/Agrc.jpg";
import img4 from "/assets/Interactuar/DFC28.jpg";
import img4c from "/assets/Interactuar/DFC28c.jpg";
import img5 from "/assets/Interactuar/ESC.jpg";
import img5c from "/assets/Interactuar/ESCc.jpg";
import img6 from "/assets/Interactuar/Fog.jpg";
import img6c from "/assets/Interactuar/Fogc.jpg";
import img7 from "/assets/Interactuar/Igle.jpg";
import img7c from "/assets/Interactuar/Iglec.jpg";
import img8 from "/assets/Interactuar/Igle2.jpg";
import img8c from "/assets/Interactuar/Igle2c.jpg";
import img9 from "/assets/Interactuar/Mol.jpg";
import img9c from "/assets/Interactuar/Molc.jpg";
import img10 from "/assets/Interactuar/Muni.jpg";
import img10c from "/assets/Interactuar/Munic.jpg";
import img11 from "/assets/Interactuar/Pile.jpg";
import img11c from "/assets/Interactuar/Pilec.jpg";
import img12 from "/assets/Interactuar/Plaz.jpg";
import img12c from "/assets/Interactuar/Plazc.jpg";
import img13 from "/assets/Interactuar/Pro.jpg";
import img13c from "/assets/Interactuar/Proc.jpg";
import img14 from "/assets/Interactuar/Pro2.jpg";
import img14c from "/assets/Interactuar/Pro2c.jpg";
import img15 from "/assets/Interactuar/Pro3.jpg";
import img15c from "/assets/Interactuar/Pro3c.jpg";
import img16 from "/assets/Interactuar/Rur.jpg";
import img16c from "/assets/Interactuar/Rurc.jpg";
import img17 from "/assets/Interactuar/miradas/agd.jpg";
import img17c from "/assets/Interactuar/miradas/agdc.jpg";
import img18 from "/assets/Interactuar/miradas/bv.jpg";
import img18c from "/assets/Interactuar/miradas/bvc.jpg";
import img19 from "/assets/Interactuar/miradas/comedor.jpg";
import img19c from "/assets/Interactuar/miradas/comedorc.jpg";
import img20 from "/assets/Interactuar/miradas/concejo.jpg";
import img20c from "/assets/Interactuar/miradas/concejoc.jpg";
import img21 from "/assets/Interactuar/miradas/entrada.jpg";
import img21c from "/assets/Interactuar/miradas/entradac.jpg";
import img22 from "/assets/Interactuar/miradas/froute.jpg";
import img22c from "/assets/Interactuar/miradas/froutec.jpg";
import img23 from "/assets/Interactuar/miradas/muni.jpg";
import img23c from "/assets/Interactuar/miradas/munic.jpg";
import img24 from "/assets/Interactuar/miradas/mutual.jpg";
import img24c from "/assets/Interactuar/miradas/mutualc.jpg";
import img25 from "/assets/Interactuar/miradas/naranjos.jpg";
import img25c from "/assets/Interactuar/miradas/naranjosc.jpg";
import img26 from "/assets/Interactuar/miradas/pintu.jpg";
import img26c from "/assets/Interactuar/miradas/pintuc.jpg";
import img27 from "/assets/Interactuar/miradas/pla1.jpg";
import img27c from "/assets/Interactuar/miradas/pla1c.jpg";
import img28 from "/assets/Interactuar/miradas/pla2.jpg";
import img28c from "/assets/Interactuar/miradas/pla2c.jpg";
import img29 from "/assets/Interactuar/miradas/tanque.jpg";
import img29c from "/assets/Interactuar/miradas/tanquec.jpg";
import img30 from "/assets/Interactuar/miradas/templo.jpg";
import img30c from "/assets/Interactuar/miradas/temploc.jpg";
import img31 from "/assets/Interactuar/miradas/via.jpg";
import img31c from "/assets/Interactuar/miradas/viac.jpg";
import "./Intractua.css";
import MasonryGrid from "../../Coleccion/MasonryGrid";

const InteractuaContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleOpenModal = (piece) => {
    setSelectedPiece(piece);
    onOpen();
  };

  const images = [
    { id: 1, bw: img1, color: img1c, text: "Procesión (1947 aproximadamente)" },
    { id: 2, bw: img2, color: img2c, text: "Trabajo Rural" },
    { id: 3, bw: img3, color: img3c, text: "Trabajo Rural" },
    {
      id: 4,
      bw: img4,
      color: img4c,
      text: "Equipo de fútbol Deheza Football Club",
    },
    {
      id: 5,
      bw: img5,
      color: img5c,
      text: "Escuela Rural Conrado Villegas (1943)",
    },
    { id: 6, bw: img6, color: img6c, text: "Trabajo Rural" },
    {
      id: 7,
      bw: img7,
      color: img7c,
      text: "Vieja Capilla Nuestra Señora de la Asunción (1914)",
    },
    { id: 8, bw: img8, color: img8c, text: "Vieja Iglesia" },
    { id: 9, bw: img9, color: img9c, text: "Viejo Molino" },
    { id: 10, bw: img10, color: img10c, text: "Edificio Municipalidad" },
    { id: 11, bw: img11, color: img11c, text: "Pileta Acción Juvenil" },
    { id: 12, bw: img12, color: img12c, text: "Plaza Central" },
    {
      id: 13,
      bw: img13,
      color: img13c,
      text: "Procesión sobre calle Liniers (1935)",
    },
    { id: 14, bw: img14, color: img14c, text: "Procesión (1935-1940)" },
    { id: 15, bw: img15, color: img15c, text: "Procesión" },
    { id: 16, bw: img16, color: img16c, text: "Trabajo Rural" },
    { id: 17, bw: img17, color: img17c, text: "Aceitera General Deheza" },
    { id: 18, bw: img18, color: img18c, text: "Boulevard San Martín" },
    { id: 19, bw: img19, color: img19c, text: "Comedor Las Peñas" },
    { id: 20, bw: img20, color: img20c, text: "Edificio Concejo Deliberante" },
    {
      id: 21,
      bw: img21,
      color: img21c,
      text: "Entrada Aceitera General Deheza",
    },
    { id: 22, bw: img22, color: img22c, text: "Casa Familia Frouté" },
    { id: 23, bw: img23, color: img23c, text: "Edificio Municipalidad" },
    { id: 24, bw: img24, color: img24c, text: "Mutual de las Comunidades" },
    { id: 25, bw: img25, color: img25c, text: "Los Naranjos" },
    {
      id: 26,
      bw: img26,
      color: img26c,
      text: "Casa Familia Caudana",
    },
    { id: 27, bw: img27, color: img27c, text: "Plaza Central" },
    { id: 28, bw: img28, color: img28c, text: "Plaza Central" },
    { id: 29, bw: img29, color: img29c, text: "Viejo tanque de agua" },
    { id: 30, bw: img30, color: img30c, text: "Templo Iglesia Católica" },
    { id: 31, bw: img31, color: img31c, text: "Vía Blanca" },
  ];

  return (
    <Stack paddingTop='25px'>
      <Text fontSize='lg' textAlign='justify'>
        Debido a la importancia de la tecnología, qué mejor que utilizar esta
        página que no hace más que mostrar cómo fueron pasando los años y nos
        fueron modificando, formando; permitiéndonos crecer y desarrollarnos.
        Actuar en la página nos hace sentir que somos parte y que nuestra
        idiosincrasia está latente en nuestros ancestros, en nosotros y en
        nuestras próximas generaciones. Este espacio te invita a contemplar
        algunas fotografías antiguas convertidas a color y transformaciones
        urbanas de General Deheza mediante la exhibición &quot;Miradas&quot; de
        Gabriela Castro.
      </Text>
      <Text pb={10} as='b' fontSize='lg' textAlign='justify'>
        Para interactuar, deberás seleccionar la fotografía y deslizar la línea
        hacia la izquierda o derecha.
      </Text>
      <MasonryGrid>
        {images.map((image) => (
          <Stack
            key={image.id}
            className='imgListLink'
            onClick={() => handleOpenModal(image)}
            position='relative'
          >
            <Image
              className='imgListItem'
              src={image.bw}
              alt='Black and White'
            />
            <Tag
              bgColor='secundario'
              size='sm'
              textTransform='uppercase'
              display={image.text ? "flex" : "none"}
              position='absolute'
              bottom={0}
              left={0}
              m={2}
            >
              {image.text}
            </Tag>
          </Stack>
        ))}
      </MasonryGrid>

      {selectedPiece && (
        <Modal isOpen={isOpen} onClose={onClose} size='5xl' isCentered>
          <ModalOverlay backdropFilter='blur(5px)' />
          <ModalContent
            maxW={!isMobile && "1000px"}
            h='auto'
            minW={!isMobile && "1000px"}
          >
            <ModalCloseButton _focusVisible='none' zIndex={10} />
            <ModalBody p={0}>
              <ReactCompareImage
                leftImage={selectedPiece.bw}
                rightImage={selectedPiece.color}
                skeleton={<Spinner />}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Stack>
  );
};

export default InteractuaContainer;
