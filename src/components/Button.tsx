import React from 'react'
import { Link } from "react-router-dom";

interface Props {
	direction: string
	buttonText: string
	canGoFurther?: boolean
}

const Button: React.FC<Props> = ({
	direction,
	buttonText,
	canGoFurther 
}) => {
	const where = canGoFurther ? `/${direction}` : '/'
	return (
		<Link to={where}>{buttonText}</Link>
	);
};

Button.defaultProps = {
	canGoFurther: true
}

export default Button