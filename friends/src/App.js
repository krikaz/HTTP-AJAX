import React from 'react';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
	state = {
		friends: [],
		errorMessage: '',
	};

	fetchFriends = () => {
		axios
			.get('http://localhost:5000/friends')
			.then(response => {
				// debugger
				this.setState({ friends: response.data });
			})
			.catch(error => {
				this.setState({ errorMessage: error.message });
			});
	};

	componentDidMount() {
		this.fetchFriends();
	}

	render() {
		console.log(this.state.friends);
		return (
			<div>
				{this.state.friends.map(friend => (
					<Friends friend={friend} />
				))}
			</div>
		);
	}
}

function Friends({ friend }) {
	return (
		<div>
			<p>
				{friend.id} {friend.name} {friend.age} {friend.email}
			</p>
		</div>
	);
}
