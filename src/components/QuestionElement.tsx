import React from 'react'
import { Question } from '../utils/interfaces'
import { decode } from "he";

import Answer from './Answer';

import styles from '../styles/styles-components/QuestionElement.module.css'
import { nanoid } from 'nanoid';

interface QuestionElementProps {
	question: Question
	id: string
}

const QuestionElement = (props: QuestionElementProps) => {
	const { question, id } = props

	return (
		<div className={styles.question} id={id}>
			<h4 className={styles["question__text"]}>{decode(question.question)}</h4>
			<div className={styles["question__answers-cont"]}>
				{/* <div
					onClick={(event) => choosenOne(event)}
					className={styles["question__answers-cont__answer"]}
				>
					{decode(question.correct_answer)}
				</div> */}
				<Answer answer={decode(question.correct_answer)} key={nanoid()} id={nanoid()} />
				{question.incorrect_answers.map((wrong) => (
					<Answer answer={decode(wrong)} id={nanoid()} key={nanoid()} />
				))}
			</div>
			<hr />
		</div>
	);
}

export default QuestionElement