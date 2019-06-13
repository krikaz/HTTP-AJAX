import React from 'react';
import axios from 'axios';
import Friend from './Friend';

const friendsAPI = 'http://localhost:5000/friends';

export default class AddNewFriend extends React.Component {
	state = {
		friends: [],
		error: null,
		friend: null,
	};

	componentDidMount() {
		// this.getAllFriends();
	}

	getAllFriends = () => {
		axios.get(friendsAPI)
			.then(res => this.setState({ friends: res.data }));
	};

	addFriend = () => {
	};

	updateFriend = () => {
	};

	deleteFriend = () => {
	};

	render() {
		return (
			<div>
				<div>
					{this.state.friends.map(fr => (
						<Friend key={fr.id} friend={fr} />
					))}
					<button onClick={this.getAllFriends}>getAllFriends</button>
				</div>

			</div>
		);
	}
}
