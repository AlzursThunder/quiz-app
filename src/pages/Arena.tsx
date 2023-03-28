import React, { LegacyRef, useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../App';
import ErrorMsg from '../components/ErrorMsg';
import Loading from '../components/Loading';
import QuestionElement from '../components/QuestionElement';
import { nanoid } from 'nanoid';

import styles from '../styles/styles-pages/Arena.module.css'
import btnStyles from '../styles/styles-components/Button.module.css'
import questElStyles from '../styles/styles-components/QuestionElement.module.css'
import answerStyles from '../styles/styles-components/Answer.module.css'

import { Points, UserAnswer } from '../utils/interfaces';
import { decode } from 'he';

const Arena: React.FC = () => {
	const { isError, isLoading, questions } = useContext(AppContext)
	const [questionsHTML, setQuestionsHTML] = useState<JSX.Element[]>()
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

	const [points, setPoints] = useState<Points>({
		answered: 0,
		correct: 0,
		overall: 0
	})
	const [isFinished, setIsFinished] = useState<boolean | string>('bruh')

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
		setQuestionsHTML(() => {
			let parentId = 0
			return questions.map(question => {
				const id = parentId++
				return <QuestionElement
					key={nanoid()}
					setUserAnswers={setUserAnswers}
					setPoints={setPoints}
					question={question}
					id={id + ''}
				/>
			})
		})

		setPoints(prev => ({
			...prev,
			overall: questions.length
		}))
	}, [questions])
	
	function stylingTime() {
		const questionBlocks = document.getElementsByClassName(questElStyles['question__answers-cont'])
		// console.log(questionBlocks);
		for (let question of questionBlocks) {
			if (question.parentElement) {
				const ancestorId = parseInt(question.parentElement?.id)
				for (let answer of question.children) {
					console.log(answer);
					if (answer.textContent === decode(questions[ancestorId].correct_answer)) {
						answer.classList.add(answerStyles['answer--correct'])
					}
					if (answer.id === userAnswers[ancestorId].answerId) {
						const badAnswer = userAnswers[ancestorId].isCorrect ? 'bruh' : answerStyles['answer--incorrect']
						answer.classList.add(badAnswer)
					}
					
				}
			}
			
		}
	}

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
			{
				questionsHTML
			}
			{isFinished && <h2>{`${points.correct}/${points.overall} points`}</h2>}
			<button className={btnStyles['fake-btn']} style={{border: 'none'}} onClick={() => {
				setIsFinished(true)
				stylingTime()
			}}>check answers</button>
		</div>
	);
};

export default Arena