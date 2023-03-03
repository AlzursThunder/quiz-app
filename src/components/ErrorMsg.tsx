import React from 'react'

import btnStyles from '../styles/styles-components/Button.module.css'
import styles from '../styles/styles-pages/NoPage.module.css'

const ErrorMsg = () => {
	return (
		<div className={styles.dark}>
			<h1 className={styles.dark__message}>Error happened</h1>
			<button
				style={{
					border: 'none'
				}}
				className={`${btnStyles["fake-btn"]}`}
				onClick={() => window.location.reload()}
			>
				Reload Page
			</button>
		</div>
	);
}

export default ErrorMsg