import React from 'react'
import Button from '../components/Button';

const NoPage: React.FC = () => {
	return (
		<div>
			<h1>
				You've reached the world's edge. None but devils play past here...
				<br /> Turn back
			</h1>
			<Button buttonText="Let's go home" direction="" />
		</div>
	);
};

export default NoPage