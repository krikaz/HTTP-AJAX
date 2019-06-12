import React from 'react';
// import PropTypes from 'prop-types';

export default function Friends({ friend }) {
	return (
		<div>
			<p>
				{friend.id} {friend.name} {friend.age} {friend.email}
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
