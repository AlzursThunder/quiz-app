import React from 'react'

// styles
import styles from '../styles/styles-components/Loading.module.css'

const Loading = () => {
	
	return (
		<div className={styles["load-container"]}>
			<h1 className={styles['big-text']}>Loading...</h1>
			<p className={styles['small-text']}>Please wait</p>
		</div>
	)
}

export default Loading