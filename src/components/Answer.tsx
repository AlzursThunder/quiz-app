import React, { useContext } from "react";

import styles from "../styles/styles-components/Answer.module.css";
import { highlightChoosenAnswer } from "../utils/functions";
import { AppContext } from "../App";
import { UserAnswer } from "../utils/interfaces";

interface AnswerProps {
	answer: string;
	id: string;
	setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>
	// choosenOne: React.MouseEventHandler<HTMLDivElement>;
}

const Answer = (props: AnswerProps) => {
	const { answer, id, setUserAnswers } = props;
	const { questions } = useContext(AppContext)

	return (
		<div
			id={id}
			onClick={(e) => highlightChoosenAnswer(e, id, styles, questions, setUserAnswers)}
			className={styles.answer}
		>
			{answer}
		</div>
	);
};

export default Answer;
