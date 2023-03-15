import React, { useContext } from "react";

import styles from "../styles/styles-components/Answer.module.css";
import { highlightChoosenAnswer } from "../utils/functions";
import { AppContext } from "../App";

interface AnswerProps {
	answer: string;
	id: string;
	// choosenOne: React.MouseEventHandler<HTMLDivElement>;
}

const Answer = (props: AnswerProps) => {
	const { answer, id } = props;
	const { setUserAnswers } = useContext(AppContext)
	return (
		<div
			id={id}
			onClick={(e) => highlightChoosenAnswer(e, id, styles, setUserAnswers)}
			className={styles.answer}
		>
			{answer}
		</div>
	);
};

export default Answer;
