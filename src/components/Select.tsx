import React, { useContext } from 'react'
import { AppContext } from '../App';
import { nanoid } from 'nanoid';
import { handleChanges } from '../utils/functions';

const Select: React.FC = () => {
	const { categories, setOptions, options } = useContext(AppContext)
	
	return (
		<>
			<p className="form-label">Choose categories</p>
			<select
				value={options.categoryId}
				className="form-select"
				aria-label="Default select example"
				name="categoryId"
				onChange={(event) => handleChanges({ event, setState: setOptions })}
			>
				{/* <option selected>Choose category</option> */}
				<option value="">Mixed Categories</option>
				{categories.map((category) => (
					<option key={nanoid()} value={category.id}>
						{category.name}
					</option>
				))}
			</select>
		</>
	);
}

export default Select