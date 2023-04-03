import React from 'react'

// components
import Button from '../components/Button';

// styles
import styles from '../styles/styles-pages/NoPage.module.css'

const NoPage: React.FC = () => {
	return (
		<div className={styles.dark}>
			<h1 className={styles['dark__message']}>
				You've reached the world's edge. None but devils play past here...
				<br /> Turn back
			</h1>
			<Button buttonText="Let's go home" direction="" />
		</div>
	);
};

export default NoPage