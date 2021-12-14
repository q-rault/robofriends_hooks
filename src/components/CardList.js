// import React from 'react';
import Card from './Card';

const CardList =({robotsCL}) => {
	if (false) {
		throw new Error('Noooooooo');
	}


	const cardsArray= robotsCL.map((user,i) => {
		return (
			<Card
			key={robotsCL[i].id} //needs an unique key for updating only what changes
			id={robotsCL[i].id}
			name={robotsCL[i].name}
			username={robotsCL[i].username}
			email={robotsCL[i].email}
			/>
		);
	});
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;