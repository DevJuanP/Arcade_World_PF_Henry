import React, { useState } from 'react';
import VideogameList from "../videogameList/videogameList"

const allVideogamesMock = [
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


const AllVideogames = () => {
  const [allVideogames, setAllVideogames] = useState(allVideogamesMock);

  return (
    <div>
      <VideogameList data={allVideogames}/>
    </div>
  )
}

export default AllVideogames

