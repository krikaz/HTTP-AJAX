import React from 'react';
import axios from 'axios';

export default class AddNewFriend extends React.Component {
	state = {
		id: 0,
		name: '',
		age: 0,
		email: '',
	};

	addFriend = () => {
		if (this.state.name && this.state.age && this.state.email) {
			axios
				.post('http://localhost:5000/friends', {
					name: this.state.name,
					age: this.state.age,
					email: this.state.email,
				})
				.then(response => console.log(response))
				.catch(error => console.log(error));
		}
	};

	updateFriend = () => {
		let link = 'http://localhost:5000/friends/' + this.state.id;
		if (this.state.name && this.state.age && this.state.email) {
			axios
				.put(link, {
					name: this.state.name,
					age: this.state.age,
					email: this.state.email,
				})
				.then(response => console.log(response))
				.catch(error => console.log(error));
		}
  };
  
  deleteFriend = () => {
		let link = 'http://localhost:5000/friends/' + this.state.id;
		if (this.state.id) {
			axios
				.delete(link)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		}
  }

	handleSubmit = () => {
		this.state.id ? this.updateFriend() : this.addFriend();
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		// console.log(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						name="id"
						type="number"
						placeholder="id for updating"
						onChange={this.handleChange}
					/>

					<input
						name="name"
						type="text"
						placeholder="name"
						onChange={this.handleChange}
					/>
					<input
						name="age"
						type="number"
						placeholder="age"
						onChange={this.handleChange}
					/>
					<input
						name="email"
						type="email"
						placeholder="email"
						onChange={this.handleChange}
					/>
					<button type="submit">Submit Change</button>
				</form>

				<form onSubmit={this.deleteFriend}>
					<input
						name="id"
						type="number"
						placeholder="id to delete"
						onChange={this.handleChange}
					/>
					<button type="submit">Delete Friend</button>
				</form>
			</div>
		);
	}
}
