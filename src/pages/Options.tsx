import React, { useContext, useEffect, useState } from 'react'
import Select from '../components/Select';
import Button from '../components/Button';

import styles from '../styles/styles-pages/Options.module.css'
import { AppContext } from '../App';

import Loading from '../components/Loading';
import ErrorMsg from '../components/ErrorMsg';

import mixedImg from '../assets/mixed.png'
import easyImg from '../assets/easy.png'
import mediumImg from '../assets/medium.png'
import hardImg from '../assets/hard.png'

const Options: React.FC = () => {
	const { isError, isLoading } = useContext(AppContext)
	
	const [canGo, setCanGo] = useState<boolean>(false)

	useEffect(() => {

	}, [])

	if (isError) {
		return <ErrorMsg />
	}

	if (isLoading) {
		return <Loading />
	}


	return (
		<div className={styles.options}>
			<h1>Options</h1>
			<div className={styles["options__form"]}>
				<div className={styles["options__form__input-select"]}>
					{/* questions number */}
					<div className="mb-3">
						<label className="form-label">
							Questions number (min - 5, max - 10)
							<input
								// autoFocus
								onChange={(e) => {}}
								type="number"
								name="questionNumber"
								className="form-control"
							/>
						</label>
					</div>
					{/* categories */}
					<div className="mb-3">
						<Select />
					</div>
				</div>
				{/* difficulty */}
				<div className={styles["options__form__radios-cont"]}>
					<p className="form-label">Difficulty levels</p>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="difficultyLevel"
								value=""
								className={`form-check-input`}
							/>
							<img src={mixedImg} alt="" />
						</label>
					</div>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="difficultyLevel"
								value="easy"
								className={`form-check-input`}
							/>
							<img src={easyImg} alt="" />
						</label>
					</div>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="difficultyLevel"
								value="medium"
								className={`form-check-input`}
							/>
							<img src={mediumImg} alt="" />
						</label>
					</div>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="difficultyLevel"
								value="hard"
								className={`form-check-input`}
							/>
							<img src={hardImg} alt="" />
						</label>
					</div>
				</div>
			</div>
			<div className={styles["options__btn-container"]}>
				<Button buttonText="START" direction="arena" canGoFurther={canGo} />
			</div>
		</div>
	);
}

export default Options