import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import styled from 'styled-components';

const friendsAPI = 'http://localhost:5000/friends';

const Form = styled.div`
	border: 1px solid black;
	margin: 1rem;
	padding: 1rem;
`;

export default class AddNewFriend extends React.Component {
	state = {
		friends: [],
		error: null,
		friend: null,
	};

	idToUpdate = React.createRef();
	nameToUpdate = React.createRef();
	ageToUpdate = React.createRef();
	emailToUpdate = React.createRef();

	componentDidMount() {
		this.getAllFriends();
	}

	getAllFriends = () => {
		axios.get(friendsAPI)
			.then(res => this.setState({ friends: res.data }));
	};

	addFriend = () => {
		const newFriend = {
			name: this.nameToUpdate.current.value,
			age: this.ageToUpdate.current.value,
			email: this.emailToUpdate.current.value,
		}
		axios.post(friendsAPI, newFriend)
			.then(() => this.getAllFriends());
	};

	updateFriend = () => {
		const newFriend = {
			name: this.nameToUpdate.current.value,
			age: this.ageToUpdate.current.value,
			email: this.emailToUpdate.current.value,
		}
		axios.put(`${friendsAPI}/${this.idToUpdate.current.value}`, newFriend)
			.then(() => this.getAllFriends());
	};

	modifyFriend = () => {
		this.idToUpdate.current.value
		? this.updateFriend()
		: this.addFriend()
	};

	deleteFriend = () => {
	};

	render() {
		return (
			<div>
				<Form>
					{this.state.friends.map(fr => (
						<Friend key={fr.id} friend={fr} />
					))}
					<button onClick={this.getAllFriends}>getAllFriends</button>
				</Form>

				<Form>
						<input type='text' placeholder='id to update' ref={this.idToUpdate} />
						<input type='text' placeholder='name' ref={this.nameToUpdate} />
						<input type='number' placeholder='age' ref={this.ageToUpdate} />
						<input type='text' placeholder='email' ref={this.emailToUpdate} />
						<button onClick={this.modifyFriend}>submit changes</button>
				</Form>

			</div>
		);
	}
}
