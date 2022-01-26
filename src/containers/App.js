import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
// import {robots as rbts} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

function App() {

const [robots, setRobots]= useState([]);
const [searchField, setSearchField]= useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => { setRobots(users)});
	}, []);

	const onSearchChange=(event) => {
		setSearchField(event.target.value);
	}


	const filteredRobots= robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return !robots.length ?
		<h1>Loading the robots</h1> :
		(
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robotsCL={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);

}

export default App;