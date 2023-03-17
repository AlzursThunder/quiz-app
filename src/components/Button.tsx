import React, { MouseEventHandler } from 'react'
import { Link } from "react-router-dom";

import styles from '../styles/styles-components/Button.module.css'
import { getData } from '../utils/functions';

interface Props {
	direction: string;
	buttonText: string;
	disabled?: boolean;
	click?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Button: React.FC<Props> = ({ direction, buttonText, disabled, click }) => {
	const where = `/${direction}`
	return (
		<Link onClick={click} to={where}>
			<button style={{
				border: 'none'
			}} className={styles['fake-btn']} disabled={disabled}>
				{buttonText}
			</button>
		</Link>
	);
};

Button.defaultProps = {
	disabled: false
}

export default Button