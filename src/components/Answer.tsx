import React from "react";

import styles from "../styles/styles-components/Answer.module.css";

interface AnswerProps {
	answer: string;
	id: string;
	// choosenOne: React.MouseEventHandler<HTMLDivElement>;
}

function highlightChoosenAnswer(
	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	id: string
) {
	const target = event.target as HTMLDivElement;
	const parent = target.parentElement
	if(parent) {
		for (let child of parent?.children) {
			console.log(child);
			child.id === id ?
				child.classList.add(styles['answer--highlighted']) :
				child.classList.remove(styles['answer--highlighted'])
		}
	}
}

const Answer = (props: AnswerProps) => {
	const { answer, id } = props;

	return (
		<div
			id={id}
			onClick={(e) => highlightChoosenAnswer(e, id)}
			className={styles.answer}
		>
			{answer}
		</div>
	);
};

export default Answer;
