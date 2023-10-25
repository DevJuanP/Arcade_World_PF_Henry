import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import VideogameList from "../../components/videogameList/videogameList"

const novedadesMock = [
  {
    id: 1,
    nombre: "juego 1",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
  {
    id: 2,
    nombre: "juego 2",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
  {
    id: 1,
    nombre: "juego 3",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
]

const popularesMock = [
  {
    id: 1,
    nombre: "juego 1",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
  {
    id: 2,
    nombre: "juego 2",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
  {
    id: 1,
    nombre: "juego 3",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
]

const mejorRatingMock = [
  {
    id: 1,
    nombre: "juego 1",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
  {
    id: 2,
    nombre: "juego 2",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
  {
    id: 1,
    nombre: "juego 3",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_638340-MLA40931045631_022020-O.webp",
  },
]

const Home = () => {
  const [novedades, setNovedades] = useState(novedadesMock);
  const [populares, setPopulares] = useState(popularesMock);
  const [mejorRating, setMejorRating] = useState(mejorRatingMock);

  return (
    <div>
      <Navbar />
      <VideogameList title="Novedades" data={novedades}/>
      <VideogameList title="Populares" data={populares}/>
      <VideogameList title="Mejor Rating" data={mejorRating}/>
    </div>
  )
}

export default Home