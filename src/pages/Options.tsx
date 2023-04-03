import React, { memo, useContext, useEffect, useState } from 'react'

// components
import Select from '../components/Select';
import Button from '../components/Button';
import Loading from '../components/Loading';
import ErrorMsg from '../components/ErrorMsg';

// styles
import styles from '../styles/styles-pages/Options.module.css'

// context & functions
import { AppContext } from '../App';
import { handleChanges, outOfRange } from '../utils/functions';

// photos for radio buttons
import mixedImg from '../assets/mixed.png'
import easyImg from '../assets/easy.png'
import mediumImg from '../assets/medium.png'
import hardImg from '../assets/hard.png'

const Options: React.FC = () => {
	const { isError, isLoading, setOptions, options, click } = useContext(AppContext)
	const [isInvalid, setIsInvalid] = useState(() => false)

	useEffect(() => {
		setIsInvalid(outOfRange({
			userData: options.questionNum,
			validQuestionsNumber: { min: 5, max: 10 },
		}))
	}, [options])

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
								style={{
									border: isInvalid ? '2px solid red' : undefined
								}}
								onChange={(event) =>
									handleChanges({ event, setState: setOptions })
								}
								type="text"
								inputMode="numeric"
								name="questionNum"
								className="form-control"
								value={options.questionNum}
							/>
						</label>
					</div>
					{/* categories */}
					<div className="mb-3">
						<Select />
					</div>
				</div>
				{/* difficulty levels */}
				<div className={styles["options__form__radios-cont"]}>
					<p className="form-label">Difficulty levels</p>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="diffLevel"
								value=""
								className={`form-check-input`}
								onChange={(event) =>
									handleChanges({ event, setState: setOptions })
								}
								checked={options.diffLevel === ""}
							/>
							<img src={mixedImg} alt="" />
						</label>
					</div>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="diffLevel"
								value="easy"
								className={`form-check-input`}
								onChange={(event) =>
									handleChanges({ event, setState: setOptions })
								}
								checked={options.diffLevel === "easy"}
							/>
							<img src={easyImg} alt="" />
						</label>
					</div>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="diffLevel"
								value="medium"
								className={`form-check-input`}
								onChange={(event) =>
									handleChanges({ event, setState: setOptions })
								}
								checked={options.diffLevel === "medium"}
							/>
							<img src={mediumImg} alt="" />
						</label>
					</div>
					<div className="mb-3">
						<label className={styles["options__form__radios-cont__radio"]}>
							<input
								type="radio"
								name="diffLevel"
								value="hard"
								className={`form-check-input`}
								onChange={(event) =>
									handleChanges({ event, setState: setOptions })
								}
								checked={options.diffLevel === "hard"}
							/>
							<img src={hardImg} alt="" />
						</label>
					</div>
				</div>
			</div>
			<div className={styles["options__btn-container"]}>
				<Button
					disabled={isInvalid}
					click={() => {
						click(options);
					}}
					buttonText="START"
					direction="arena"
				/>
			</div>
		</div>
	);
}

export default memo(Options)