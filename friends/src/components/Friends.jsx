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

// const RedSquare = styled`
// 	color: red;
// `;

export default class AddNewFriend extends React.Component {
	state = {
		friends: [],
		error: null,
	};

	idToUpdate = React.createRef();
	nameToUpdate = React.createRef();
	ageToUpdate = React.createRef();
	emailToUpdate = React.createRef();

	componentDidMount() {
		this.getAllFriends();
	}

	getAllFriends = () => {
		axios.get(friendsAPI).then(res => this.setState({ friends: res.data }));
	};

	addFriend = () => {
		const newFriend = {
			name: this.nameToUpdate.current.value,
			age: this.ageToUpdate.current.value,
			email: this.emailToUpdate.current.value,
		};
		axios.post(friendsAPI, newFriend).then(() => this.getAllFriends());
	};

	updateFriend = () => {
		const newFriend = {
			name: this.nameToUpdate.current.value,
			age: this.ageToUpdate.current.value,
			email: this.emailToUpdate.current.value,
		};
		axios
			.put(`${friendsAPI}/${this.idToUpdate.current.value}`, newFriend)
			.then(() => this.getAllFriends());
	};

	modifyFriend = () => {
		if (this.nameToUpdate.current.value === '') {
			this.nameToUpdate.current.placeholder = 'please enter a name';
			this.nameToUpdate.current.focus();
		} else if (this.ageToUpdate.current.value === '') {
			this.ageToUpdate.current.placeholder = 'please enter an age';
			this.ageToUpdate.current.focus();
		} else if (this.emailToUpdate.current.value === '') {
			this.emailToUpdate.current.placeholder = 'please enter an email';
			this.emailToUpdate.current.focus();
		} else {
			if (this.idToUpdate.current.value) {
				this.updateFriend();
				this.resetFields();
			} else {
				this.addFriend();
				this.resetFields();
			}
		}
	};

	deleteFriend = () => {
		if (this.idToUpdate.current.value !== '') {
			axios
				.delete(`${friendsAPI}/${this.idToUpdate.current.value}`)
				.then(() => this.getAllFriends());
			this.resetFields();
		} else {
			this.resetFields();
			this.idToUpdate.current.placeholder = 'please enter an id to delete';
			this.idToUpdate.current.focus();
		}
	};

	resetFields = () => {
		this.idToUpdate.current.value = '';
		this.nameToUpdate.current.value = '';
		this.ageToUpdate.current.value = '';
		this.emailToUpdate.current.value = '';
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
					<input
						type="text"
						placeholder="id to update or delete"
						ref={this.idToUpdate}
					/>
					<input type="text" placeholder="name" ref={this.nameToUpdate} />
					<input type="text" placeholder="age" ref={this.ageToUpdate} />
					<input type="text" placeholder="email" ref={this.emailToUpdate} />
					<br />
					<button onClick={this.modifyFriend}>add friend</button>
					<button onClick={this.deleteFriend}>delete friend</button>
				</Form>
			</div>
		);
	}
}
