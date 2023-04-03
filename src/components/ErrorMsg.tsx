import React from 'react'
import { Link } from 'react-router-dom';

// styles
import styles from '../styles/styles-pages/NoPage.module.css'
import btnStyles from '../styles/styles-components/Button.module.css'

const ErrorMsg = () => {

	return (
		<div className={styles.dark}>
			<h1 className={styles.dark__message}>Sorry, something went wrong</h1>
			<div
				style={{
					display: "flex",
					justifyContent: 'center'
				}}
			>
				<Link to={"/"} className={btnStyles["fake-btn"]}>
					Home
				</Link>
				<Link to={"/options"} className={btnStyles["fake-btn"]}>
					Options
				</Link>
			</div>
		</div>
	);
}

export default ErrorMsg