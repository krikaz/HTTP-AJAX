import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friend';
import AddNewFriend from './components/Friends';

export default class App extends React.Component {
	state = {
		friends: [],
		errorMessage: '',
	};

	fetchFriends = () => {
		axios
			.get('http://localhost:5000/friends')
			.then(response => {
				this.setState({ friends: response.data });
			})
			.catch(error => {
				this.setState({
					errorMessage: error.message,
        });
        console.log(this.state.errorMessage);
			});
	};

	componentDidMount() {
		this.fetchFriends();
	}

	render() {
		// console.log(this.state.friends);
		return (
			<div>
				<div>
					<Friends />
				</div>

				<div>
					<AddNewFriend />
				</div>
			</div>
		);
	}
}
