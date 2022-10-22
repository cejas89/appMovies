import logo from './logo.svg';
import './App.css';
import ListadoPeliculas from './ListadoPeliculas';
import Blog from './Blog';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

	return (
		<Router>

			<Switch>

				<Route path="/Blog">
					<Blog />
				</Route>

				<Route path="/">
					<ListadoPeliculas/>
				</Route>

			</Switch>
			
		</Router>
	);
}

export default App;
