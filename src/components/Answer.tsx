import React, { useContext, } from "react";
import { decode } from "he";

// styles
import styles from "../styles/styles-components/Answer.module.css";

// interfaces & context
import { Points, UserAnswer } from "../utils/interfaces";
import { AppContext } from "../App";
import { ArenaProps } from "../pages/Arena";

interface AnswerProps {
	answer: string;
	id: string;
	setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>
	setPoints: React.Dispatch<React.SetStateAction<Points>>
}

const Answer: React.FC<AnswerProps> = (props: AnswerProps) => {
	const { answer, id, setUserAnswers, setPoints } = props;
	const { questions } = useContext(AppContext)
	const { isFinished } = useContext(ArenaProps)

	// updates userAnswers, points & style answer chosen by user
	function highlightChosenAnswer(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>,
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
							answerId: target.id,
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
		<button
			id={id}
			disabled={isFinished === true}
			onClick={(e) => {
				highlightChosenAnswer(e, setUserAnswers)
			}}
			className={styles.answer}
		>
			{answer}
		</button>
	);
};

export default Answer;
