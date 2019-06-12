import React from 'react';
import './App.css';
import axios from 'axios';
import PropTypes from 'prop-types';

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
				<div>
					{this.state.friends.map(friend => (
						<Friends key={friend.id} friend={friend} />
					))}
				</div>

				<div>
					<AddNewFriend />
				</div>
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

Friends.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	age: PropTypes.number,
	email: PropTypes.string,
};

function AddNewFriend() {
	return (
		<form>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="age" />
			<input type="text" placeholder="email" />
			<button type="submit">Add Friend</button>
		</form>
	);
}
