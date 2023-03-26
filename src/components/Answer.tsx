import React, { useContext } from "react";

import styles from "../styles/styles-components/Answer.module.css";
// import { highlightChoosenAnswer } from "../utils/functions";
import { AppContext } from "../App";
import { Points, UserAnswer } from "../utils/interfaces";
import { decode } from "he";

interface AnswerProps {
	answer: string;
	id: string;
	setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>
	setPoints: React.Dispatch<React.SetStateAction<Points>>
}

const Answer = (props: AnswerProps) => {
	const { answer, id, setUserAnswers, setPoints } = props;
	const { questions } = useContext(AppContext)

	// adds style to answer choosen by player
	// and removes this style from any other answer
	function highlightChoosenAnswer(
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) {
		const target = event.target as HTMLDivElement;
		const parent = target.parentElement;
		const ancestor = parent?.parentElement
		let answers: UserAnswer[] = []
		if (ancestor) {
			let ancestorId = ancestor.id
			for (let child of parent.children) {
				if (child.id === target.id) {
					child.classList.add(styles["answer--highlighted"]);
					setUserAnswers((prev) => {
						answers = prev
						answers[parseInt(ancestor.id)] = {
							answer: child.textContent ? child.textContent : '',
							answerId: child.id,
							isCorrect: child.textContent === decode(questions[parseInt(ancestorId)].correct_answer)
						}						
						return answers
					})
					setPoints(prev => {
						return {
							...prev,
							answered: answers.filter(() => true).length,
							correct: answers.filter(answer => answer.isCorrect).length
						}
					})
				} else {
					child.classList.remove(styles['answer--highlighted'])
				}
			}
		}
	}

	return (
		<div
			id={id}
			onClick={(e) => highlightChoosenAnswer(e)}
			className={styles.answer}
		>
			{answer}
		</div>
	);
};

export default Answer;
