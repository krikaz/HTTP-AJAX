import React from 'react';
import axios from 'axios';

export default class AddNewFriend extends React.Component {
	state = {
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

	handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
	};

	render() {
		return (
			<form onSubmit={this.addFriend}>
				<input
					name="name"
					type="text"
					placeholder="name"
					onChange={this.handleChange}
				/>
				<input
					name="age"
					type="text"
					placeholder="age"
					onChange={this.handleChange}
				/>
				<input
					name="email"
					type="text"
					placeholder="email"
					onChange={this.handleChange}
				/>
				<button type="submit">Add Friend</button>
			</form>
		);
	}
}
