import React from 'react'
import Select from '../components/Select';
import Button from '../components/Button';

import styles from '../styles/styles-pages/Options.module.css'

const Options: React.FC = () => {
	return (
		<div className={styles.options}>
			<h1>Options</h1>
			<div className={styles["options__inputs-cont"]}>
				{/* questions number */}
				<div>
					<label>
						<p className={styles.options__text}>
							Questions number (min - 5, max - 10)
						</p>
						<input
							type="number"
							name="questionNumber"
							className="form-control"
						/>
					</label>
				</div>

				{/* categories */}
				<Select />

				{/* difficulty */}
				<div>
					<div>
						<label>
							<input type="radio" name="difficultyLevel" value="" /> Mixed
							categories
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="difficultyLevel" value="easy" /> Easy
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="difficultyLevel" value="medium" />{" "}
							Medium
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="difficultyLevel" value="hard" /> Hard
						</label>
					</div>
				</div>
			</div>
			<div className={styles["options__btn-container"]}>
				<Button buttonText="START" direction="arena" canGoFurther={false} />
			</div>
		</div>
	);
}

export default Options