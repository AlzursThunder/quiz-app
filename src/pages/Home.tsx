import React, { useContext } from "react";
import Button from "../components/Button";

import styles from "../styles/styles-pages/Home.module.css";
import { AppContext } from "../App";

import { getData, getRandQuestions } from "../utils/functions";

const Home: React.FC = () => {
	const { RandQuestionsParams } = useContext(AppContext);

	return (
		<div className={styles.main}>
			<h1>Quiz</h1>
			<div className={styles["main__description"]}>
				<p>
					Welcome! <br /> Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Aperiam earum consequuntur asperiores. Obcaecati, maiores. Nemo,
					totam dolor tenetur error asperiores pariatur optio id necessitatibus
					amet ullam voluptates cupiditate at est.
				</p>
			</div>
			<div className={styles["main__btn-container"]}>
				<Button direction="options" buttonText="START" />
				<Button
					direction="arena"
					click={() =>
						RandQuestionsParams && getRandQuestions(RandQuestionsParams)
					}
					buttonText="I'm feeling lucky"
				/>
			</div>
		</div>
	)
};

export default Home;
