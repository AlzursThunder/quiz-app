import React, { LegacyRef, createContext, useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../App';
import ErrorMsg from '../components/ErrorMsg';
import Loading from '../components/Loading';
import QuestionElement from '../components/QuestionElement';
import { nanoid } from 'nanoid';

import styles from '../styles/styles-pages/Arena.module.css'
import btnStyles from '../styles/styles-components/Button.module.css'
import questElStyles from '../styles/styles-components/QuestionElement.module.css'
import answerStyles from '../styles/styles-components/Answer.module.css'

import { ArenaContext, Points, UserAnswer } from '../utils/interfaces';
import { decode } from 'he';
import Warning from '../components/Warning';
import Button from '../components/Button';
import { getRandQuestions } from '../utils/functions';

export const ArenaProps = createContext<ArenaContext>({
	isFinished: '',
})

const Arena: React.FC = () => {
	const { isError, isLoading, questions, RandQuestionsParams } = useContext(AppContext)
	const [questionsHTML, setQuestionsHTML] = useState<JSX.Element[]>()
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

	const [points, setPoints] = useState<Points>({
		answered: 0,
		correct: 0,
		overall: questions.length
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
		setPoints(prev => ({
			...prev,
			overall: questions.length
		}))

		setQuestionsHTML(() => {
			let parentId = 0
			return questions.map(question => {
				const id = parentId++
				return <QuestionElement
					key={nanoid()}
					points={isFinished}
					setUserAnswers={setUserAnswers}
					setPoints={setPoints}
					question={question}
					id={id + ''}
				/>
			})
		})
	}, [questions])

	function stylingTime() {
		const questionBlocks = document.getElementsByClassName(questElStyles['question__answers-cont'])
		// console.log(questionBlocks);
		for (let question of questionBlocks) {
			if (question.parentElement) {
				const ancestorId = parseInt(question.parentElement?.id)
				for (let answer of question.children) {
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
			<ArenaProps.Provider value={{
				isFinished,
			}}>
				{
					questionsHTML
				}
			</ArenaProps.Provider>
			{isFinished === true && <h2>{`${points.correct}/${points.overall} points`}</h2>}
			{!isFinished && <Warning message='Please select all answer.' />}
			<div>
				{!(isFinished === true) ? (<button className={btnStyles['fake-btn']} style={{ border: 'none' }} onClick={() => {
					setIsFinished(points.answered === points.overall)
					if (points.answered === points.overall) {
						stylingTime()
					}
				}}>check answers</button>) :
					(<div>
						<Button buttonText='play again' direction='options' disabled={false} />
						<Button buttonText='quick game' direction='arena' click={() => {
							setIsFinished('bruh')
							RandQuestionsParams && getRandQuestions(RandQuestionsParams)
						}} />
					</div>)
				}
			</div>
		</div>
	);
};

export default Arena