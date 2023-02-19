import React from 'react'
import Select from '../components/Select';

const Options: React.FC = () => {
	return (
		<div>
			<h1>Options</h1>
			<div>
				{/* questions number */}
				<div>
					<label>
						<p>Questions number (min - 5, max - 10)</p>
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
							<input type="radio" name="difficultyLevel" value="" />
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="difficultyLevel" value="easy" />
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="difficultyLevel" value="medium" />
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="difficultyLevel" value="hard" />
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Options