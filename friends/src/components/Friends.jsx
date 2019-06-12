import React from 'react';
// import PropTypes from 'prop-types';

export default function Friends({ friend }) {
	return (
		<div>
			<p>
				ID={friend.id}; Name={friend.name}; Age={friend.age}; Email={friend.email}
			</p>
		</div>
	);
}

// Friends.propTypes = {
// 	id: PropTypes.number,
// 	name: PropTypes.string,
// 	age: PropTypes.number,
// 	email: PropTypes.string,
// };
