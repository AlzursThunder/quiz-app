import React from 'react'

// styles
import styles from '../styles/styles-components/Warning.module.css'

interface WarningProps {
	message: string
}

const Warning = (props: WarningProps) => {
	const { message } = props

	return (
		<div className={`alert alert-danger ${styles.message}`} role="alert">
			<img
				className={styles["danger-icon"]}
				src="/danger-icon.png"
				alt="stop right there"
			/>
			<div>{message}</div>
		</div>
	);
}

export default Warning