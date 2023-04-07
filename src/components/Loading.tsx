import React from 'react'

// styles
import styles from '../styles/styles-components/Loading.module.css'

const Loading = () => {
	
	return (
		<div className={styles["load-container"]}>
			<h1 className={styles['big-text']}>Loading <div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div></h1>
			<p className={styles['small-text']}>Please wait</p>
		</div>
	)
}

export default Loading