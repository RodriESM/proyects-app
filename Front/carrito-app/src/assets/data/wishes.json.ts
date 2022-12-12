import { Whis } from "src/app/interfaces/wish";
import { v4 as uuid } from 'uuid';

export const WHISES_DATA: Whis[] =
[
  {
    id: uuid(),
    titulo: "Focusrite Scarlett 2i2 3rd Gen",
    description: "Interfaz de audio USB 2.0 de 2 canales con conexión USB-C",
    web: 'https://www.thomann.de/es/focusrite_scarlett_2i2_3rd_gen.htm',
    precio: 158,
    comprado: true,
    cantidad: 1,
    imagen:  'https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/467950/14226632_800.jpg',
    estrellas: '../assets/img/estrellas.png'
  },
  {
    id: uuid(),
    titulo: "Curso de Comida Vegetariana",
    description: "Description",
    web: 'José Guzman',
    precio: 200,
    comprado: false,
    cantidad: 1,
    imagen:  '../assets/img/curso2.jpg',
    estrellas: '../assets/img/estrellas.png'
  },
  {
    id: uuid(),
    titulo: "Guitarra para Principiantes",
    description: "Description",
    web: 'Rodrigo Martínez',
    precio: 220,
    comprado: false,
    cantidad: 1,
    imagen:  '../assets/img/curso3.jpg',
    estrellas: '../assets/img/estrellas.png'
  },
  {
    id: uuid(),
    titulo: "HTML5, CSS3, JavaScript para Principiantes",
    description: "Description",
    web: 'Juan Pedro',
    precio: 125,
    comprado: false,
    cantidad: 1,
    imagen:  '../assets/img/curso1.jpg',
    estrellas: '../assets/img/estrellas.png'
  },
  {
    id: uuid(),
    titulo: "Curso de Comida Vegetariana",
    description: "Description",
    web: 'José Guzman',
    precio: 200,
    comprado: false,
    cantidad: 1,
    imagen:  '../assets/img/curso2.jpg',
    estrellas: '../assets/img/estrellas.png'
  },
  {
    id: uuid(),
    titulo: "Guitarra para Principiantes",
    description: "Description",
    web: 'Rodrigo Martínez',
    precio: 220,
    comprado: false,
    cantidad: 1,
    imagen:  '../assets/img/curso3.jpg',
    estrellas: '../assets/img/estrellas.png'
  }
]
