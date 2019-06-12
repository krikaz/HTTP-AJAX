import React from 'react';

export default function AddNewFriend() {
	return (
		<form>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="age" />
			<input type="text" placeholder="email" />
			<button type="submit">Add Friend</button>
		</form>
	);
}
