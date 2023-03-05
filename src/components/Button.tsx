import React, { MouseEventHandler } from 'react'
import { Link } from "react-router-dom";

import styles from '../styles/styles-components/Button.module.css'
import { getData } from '../utils/functions';

interface Props {
	direction: string;
	buttonText: string;
	canGoFurther?: boolean;
	click?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Button: React.FC<Props> = ({ direction, buttonText, canGoFurther, click }) => {
	const where = canGoFurther ? `/${direction}` : "/";
	return (
		<Link onClick={click} className={styles["fake-btn"]} to={where}>
			{buttonText}
		</Link>
	);
};

Button.defaultProps = {
	canGoFurther: true
}

export default Button