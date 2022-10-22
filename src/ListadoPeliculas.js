import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Pelicula from './Pelicujla';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function ListadoPeliculas() {


	var TOTAL_POR_PAGINA = 7;

	const [paginaActual, setPaginaActual] = useState(1);
	const [peliculas, setpeliculas] = useState([]);
	
	useEffect(() => {
		cargarMovies();

	}, []);


	const cargarMovies = async () => {
		const respuesta = await fetch('https://lucasmoy.dev/data/react/peliculas.json');
		const json = await respuesta.json();
		setpeliculas(json);
	}




	const getTotalPaginas = () => {
		let cantidadTotalPeliculas = peliculas.length
		return Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);

	}


	let peliculasPorPagina = peliculas.slice(

		(paginaActual - 1) * TOTAL_POR_PAGINA,
		paginaActual * TOTAL_POR_PAGINA
		);


	return (

		<PageWrapper>

	
			{peliculasPorPagina.map(pelicula =>

				<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores}
					fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}> {pelicula.descripcion}

				</Pelicula>

			)}


			<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
				setPaginaActual(pagina)
			}} />

		</PageWrapper>


	);
}

export default ListadoPeliculas;
