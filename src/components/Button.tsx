import React from 'react'
import { Link } from "react-router-dom";

import styles from '../styles/styles-components/Button.module.css'

interface Props {
	direction: string
	buttonText: string
	canGoFurther?: boolean
}

const Button: React.FC<Props> = ({ direction, buttonText, canGoFurther }) => {
	const where = canGoFurther ? `/${direction}` : "/";
	return (
		<Link className={styles["fake-btn"]} to={where}>
			{buttonText}
		</Link>
	);
};

Button.defaultProps = {
	canGoFurther: true
}

export default Button