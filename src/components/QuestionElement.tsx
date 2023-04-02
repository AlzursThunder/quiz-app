import React, { memo, useEffect, useMemo, useState } from 'react'
import { Points, Question, UserAnswer } from '../utils/interfaces'
import { decode } from "he";

import Answer from './Answer';

import styles from '../styles/styles-components/QuestionElement.module.css'
import { nanoid } from 'nanoid';
import { shuffleArray } from '../utils/functions';

interface QuestionElementProps {
	question: Question
	id: string
	setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>
	setPoints: React.Dispatch<React.SetStateAction<Points>>
	points: boolean | string
}

const QuestionElement: React.FC<QuestionElementProps> = (props: QuestionElementProps) => {
	const { question, id, setUserAnswers, setPoints, points } = props
	
	const tmp = [question.correct_answer]
	question.incorrect_answers.map((wrong) => tmp.push(wrong));
	let shuffledAnswers = shuffleArray(tmp)
	
	return (
		<div className={styles.question} id={id}>
			<h4 className={styles["question__text"]}>{decode(question.question)}</h4>
			<div className={styles["question__answers-cont"]}>
				{shuffledAnswers.map((value) => {
					const id = nanoid()
					return <Answer points={points} setPoints={setPoints} setUserAnswers={setUserAnswers} key={nanoid()} answer={decode(value)} id={id} />;})}
				
			</div>
			<hr />
		</div>
	);
}

export default QuestionElement