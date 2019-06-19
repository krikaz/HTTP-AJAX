import React from 'react';
// import PropTypes from 'prop-types';

export default function Friends({ friend }) {
	if (!friend) return null;
	return (
		<div>
				{friend.id} {friend.name} {friend.age} {friend.email}
		</div>
	);
}

// Friends.propTypes = {
// 	id: PropTypes.number,
// 	name: PropTypes.string,
// 	age: PropTypes.number,
// 	email: PropTypes.string,
// };
