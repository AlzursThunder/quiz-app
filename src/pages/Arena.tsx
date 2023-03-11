import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../App';
import ErrorMsg from '../components/ErrorMsg';
import Loading from '../components/Loading';
import QuestionElement from '../components/QuestionElement';
import { nanoid } from 'nanoid';

import styles from '../styles/styles-pages/Arena.module.css'

const Arena: React.FC = () => {
	const { isError, isLoading, questions } = useContext(AppContext)
	// useEffect(() => {
	// 	console.log(questions);
		
	// }, [questions])

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
			{
				questions.map(question => {
					const id = nanoid()
					return <QuestionElement key={nanoid()} question={question} id={id} />
				})
			}
		</div>
	)
};

export default Arena