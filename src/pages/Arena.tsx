import React, { LegacyRef, useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../App';
import ErrorMsg from '../components/ErrorMsg';
import Loading from '../components/Loading';
import QuestionElement from '../components/QuestionElement';
import { nanoid } from 'nanoid';

import styles from '../styles/styles-pages/Arena.module.css'
import btnStyles from '../styles/styles-components/Button.module.css'
import { Points, UserAnswer } from '../utils/interfaces';
import { shuffleArray } from '../utils/functions';
const Arena: React.FC = () => {
	const { isError, isLoading, questions, setQuestions } = useContext(AppContext)
	let [parentId, setParentId] = useState(-1)
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

	const [points, setPoints] = useState<Points>({
		answered: 0,
		correct: 0,
		overall: questions.length
	})
	const [isFinished, setIsFinished] = useState(false)

	useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			// Cancel the event
			event.preventDefault();
			// Chrome requires returnValue to be set
			event.returnValue = '';
			// Show the warning message
			const message = 'Are you sure you want to leave?';
			event.returnValue = message;
			return message;
		};
		// Add the event listener
		window.addEventListener('beforeunload', handleBeforeUnload);
		// Remove the event listener on unmount
		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, []);
	
	useEffect(() => {
		setPoints(prev => ({ ...prev, overall: questions.length }))

		setQuestions && setQuestions(prev => {
			prev.forEach(question => {
				let tmp = [question.correct_answer]
				question.incorrect_answers.forEach(wrong => tmp.push(wrong))
				tmp = shuffleArray(tmp)
				question.all_answers = tmp
				return question
			})
			console.log(prev);
			return prev
		})
	}, [questions])
	
	useEffect(() => {
		// console.log(userAnswers);
		setPoints(prev => {
			return {
				...prev,
				answered: userAnswers.filter(() => true).length,
				correct: userAnswers.filter(answer => answer.isCorrect).length
			}
		})
	}, [userAnswers])
	
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
						setUserAnswers={setUserAnswers}
						setPoints={setPoints}
						question={question}
						id={id + ''}
					/>
				);
			})}
			{isFinished && <h2>{`${points.correct}/${points.overall} points`}</h2>}
			<button className={btnStyles['fake-btn']} style={{border: 'none'}} onClick={() => setIsFinished(true)}>check answers</button>
		</div>
	);
};

export default Arena