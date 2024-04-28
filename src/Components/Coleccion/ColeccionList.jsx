const coleccion = [
  {
    titulo: "Balde para Aljibe",
    date: 1912,
    donador: "Familia Ribetto",
    descripcion:
      "Balde para bajar al aljibe y enfriar las bebidas. Hecho por Bartulin Ferrero. Perteneciente a Celestino Ribetto.",
    img: "assets/Coleccion/1-balde.jpg",
  },
  {
    titulo: "Máquina para moler café",
    date: 1940,
    donador: "Familia Frouté",
    descripcion: "Pertenecía a Ramos Generales de José Frouté.",
    img: "assets/Coleccion/2-cafe.jpg",
  },
  {
    titulo: "Balanza de hierro",
    date: 1940,
    donador: "Familia Frouté",
    descripcion: "Pertenecía a Ramos Generales de José Frouté.",
    img: "assets/Coleccion/3-balanza.jpg",
  },
  {
    titulo: "Sopera",
    date: 1900,
    donador: "Familia Richetta",
    descripcion:
      "Traída de Italia. El material es Porcelana Francesa. Sus dueños fueron Tomasso Richetta y María José Rachetto.",
    img: "assets/Coleccion/4-sopera.jpg",
  },
  {
    titulo: "Cuadro de Casamiento",
    date: 1941,
    donador: "Familia Scattolini",
    descripcion: "Casamiento Inés Bossio y Humberto Scattolini.",
    img: "assets/Coleccion/5-cuadro.jpg",
  },
  {
    titulo: "Vestido de novia",
    date: 1941,
    donador: "Familia Scattolini",
    descripcion:
      "El vestido de novia pertenecía a Inés Bossio, casada con Humberto Scattolini.",
    img: "assets/Coleccion/28-vestido.jpg",
  },
  {
    titulo: "Radio",
    date: 1920,
    donador: "Santiago Giuliano",
    descripcion:
      "Pertenecían a Ramos Generales de los Hermanos Racca. La radio se utilizaba para comunicarse con Rosario y conocer el precio de los cereales y los auriculares se precisaban en momentos de mala señal.",
    img: "assets/Coleccion/6-radio.jpg",
  },
  {
    titulo: "Valija de madera",
    date: 1980,
    donador: "Rubén Zabala",
    descripcion: "La utilizaban los ferroviarios en sus traslados.",
    img: "assets/Coleccion/9-valija.jpg",
  },
  {
    titulo: "Farol de señal",
    date: 1980,
    donador: "Rubén Zabala",
    descripcion: "Farol a Queroseno utilizado en la estación ferroviaria.",
    img: "assets/Coleccion/30-farol.jpg",
  },
  {
    titulo: "Periódicos sobre la Guerra de Malvinas",
    date: 1982,
    donador: "González Daniel y Martina Idelio",
    descripcion: "Los periódicos se datan desde 02/04/82 hasta 09/06/82.",
    img: "assets/Coleccion/10-periodico.jpg",
  },
  {
    titulo: "Sifón",
    date: 1920,
    donador: "Santiago Giuliano",
    img: "assets/Coleccion/11-sifon.jpg",
  },
  {
    titulo: "Farol de señal",
    date: 1980,
    donador: "Rubén Zabala",
    descripcion: "Farol a Queroseno utilizado en la estación ferroviaria",
    img: "assets/Coleccion/12-farol.jpg",
  },
  {
    titulo: "Radio",
    date: 1948,
    donador: "Mariam Allasino",
    img: "assets/Coleccion/13-radio.jpg",
  },
  {
    titulo: "Radio",
    date: 1950,
    donador: "Franco Morra",
    img: "assets/Coleccion/14-radio.jpg",
  },
  {
    titulo: "Máquina de escribir",
    donador: "Familia Pignatelli",
    img: "assets/Coleccion/29-maquina.jpg",
  },
  {
    titulo: "Lampara de luz",
    date: 1930,
    donador: "Santiago Giuliano",
    descripcion: "Lámpara a Queroseno. Estilo Petromax",
    img: "assets/Coleccion/27-lampara.jpg",
  },
  {
    titulo: "Teléfono",
    date: 1935,
    donador: "Santiago Giuliano",
    descripcion:
      "Para comunicarse con dicho artefacto, primero eran atendidos por una operadora a la cual se le dictaba el número para que ésta concrete la llamada.",
    img: "assets/Coleccion/16-telefono.jpg",
  },
  {
    titulo: "Copa Comercio Torneo Regional Dalmacio Vélez",
    date: 1999,
    donador: "Deheza Football Club",
    img: "assets/Coleccion/17-copa.jpg",
  },
  {
    titulo: "Plancha a Carbón",
    date: 1950,
    donador: "Norma de Grosso",
    img: "assets/Coleccion/18-plancha.jpg",
  },
  {
    titulo: "Lanza",
    date: "Desconocida",
    donador: "Asociación Bomberos Voluntarios",
    descripcion:
      "Se utilizó hasta los años 2000. Su función era regular el chorro, tenían caudal constante y se encontraban al final de la manguera. Estaban construidas de bronce.",
    img: "assets/Coleccion/19-lanza.jpg",
  },
  {
    titulo: "Casco",
    date: 1979,
    donador: "Asociación Bomberos Voluntarios",
    descripcion: "Se utilizaba en el año 1979 en incendios y accidentes.",
    img: "assets/Coleccion/20-casco.jpg",
  },
  {
    titulo: "Granadas contra incendio",
    date: 1900,
    donador: "Asociación Bomberos Voluntarios",
    descripcion:
      "Se utilizaban a principios del siglo XX. Su función era sofocar un principio de incendio, arrojándose a la base del fuego.",
    img: "assets/Coleccion/21-granada.jpg",
  },
  {
    titulo: "Missal Diario",
    date: 1965,
    donador: "Iglesia Nuestra Señora de la Asunción",
    descripcion:
      "Se utilizaba por los fieles en la época de las celebraciones en latin, la cual la gente podía seguir con ese libro, las partes de las celebraciones de la Misa. ",
    img: "assets/Coleccion/22-misal.jpg",
  },
  {
    titulo: "Estola",
    date: "Desconocida",
    donador: "Iglesia Nuestra Señora de la Asunción",
    descripcion:
      "Vestidura Sagrada en forma de banda. Es un signo de dignidad y poder sacerdotal, que representa el yugo de Cristo según el significado de la liturgia celebrada. La estola es un vestido de gala de distintos colores, los que representan cada una de las evocaciones. El blanco y dorado (Pascua); verde (Tiempo Ordinario); rojo (Domingo de Ramos, Viernes Santo, Pentecostés) y el violeta (Adviento, Cuaresma, Misas de difuntos).",
    img: "assets/Coleccion/23-estola.jpg",
  },
  {
    titulo: "Biblia",
    date: "Desconocida",
    donador: "Iglesia de Los Hermanos",
    descripcion:
      "Es una biblia utilizada por personas que asistieron a la Iglesia de los Hermanos. Fue impresa en Gran Bretaña, acopiada en España y traída a nuestro país por alguna editorial. Utiliza un castellano antiguo (Versión 1909) de los traductores Casiodoro de Reyna y Cipriano de Valera.",
    img: "assets/Coleccion/24-biblia.jpg",
  },
  {
    titulo: "Biblia",
    date: "Desconocida",
    donador: "Iglesia de Los Hermanos",
    descripcion:
      "Es una biblia utilizada por personas que asistieron a la Iglesia de los Hermanos. Corresponde a una versión posterior (1960), impresa en Argentina por la Sociedad Bíblica de nuestro país. Posee un lenguaje más accesible y contemporáneo.",
    img: "assets/Coleccion/25-biblia.jpg",
  },
  {
    titulo: "Tester",
    date: "Desconocida",
    donador: "Cooperativa Eléctrica",
    descripcion:
      "Se trata de un Tester que se utilizaba en los años 1960 aproximadamente para medir la energía.",
    img: "assets/Coleccion/26-tester.jpg",
  },
];

export default coleccion;
