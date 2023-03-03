import React, { useContext } from 'react'
import { AppContext } from '../App';
import { nanoid } from 'nanoid';

const Select: React.FC = () => {
	const { categories } = useContext(AppContext)
	
	return (
		<>
			<p className='form-label'>Choose categories</p>
			<select className="form-select" aria-label="Default select example">
				{/* <option selected>Choose category</option> */}
				<option value="">Mixed Categories</option>
				{
					categories
						? categories.map((category) => (
								<option key={nanoid()} value={category.id}>
									{category.name}
								</option>
							))
						: null
				}
			</select>
		</>
	);
}

export default Select