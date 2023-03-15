import React, { LegacyRef, useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../App';
import ErrorMsg from '../components/ErrorMsg';
import Loading from '../components/Loading';
import QuestionElement from '../components/QuestionElement';
import { nanoid } from 'nanoid';

import styles from '../styles/styles-pages/Arena.module.css'
import btnStyles from '../styles/styles-components/Button.module.css'
const Arena: React.FC = () => {
	const { isError, isLoading, questions } = useContext(AppContext)
	let [parentId, setParentId] = useState(-1)


	if (isError) {
		return <ErrorMsg />
	}

	if (isLoading) {
		return <Loading />
	}

	if (questions.length === 0) {
		return <ErrorMsg />;
	}
	
	return (
		<div className={styles.arena}>
			<h1 className={styles["arena__welcome-text"]}>Good luck</h1>
			{questions.map((question) => {
				const id = ++parentId
				return (
					<QuestionElement
						key={nanoid()}
						question={question}
						id={id + ''}
					/>
				);
			})}
			<button className={btnStyles['fake-btn']} style={{border: 'none'}}>check answers</button>
		</div>
	);
};

export default Arena