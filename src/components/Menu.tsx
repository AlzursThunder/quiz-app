import React, { useEffect, } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from '../styles/styles-components/Menu.module.css'

const Menu = () => {
	// useEffect(() => {
	// 	const toggleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	// 		document.querySelector(styles['links'])?.classList.toggle(styles['show-links'])
	// 	}
	// 	if (document.querySelector(styles["nav-toggle"])) {
	// 		document.querySelector(styles["nav-toggle"]).addEventListener('', toggleMenu)
	
	// 		return () => {
	// 			document.querySelector(styles["nav-toggle"]).removeEventListener('click', toggleMenu)
	// 		}
	// 	}
	// }, [])
	return (
		<>
		<nav className={styles.nav}>
			<div className={styles['nav-center']}>
					<div className={styles["nav-header"]}>
						<img src="/favicon.ico" className="logo" alt="logo" />
						<button className={styles["nav-toggle"]} onClick={() => {
							document.getElementsByClassName(styles['links'])[0].classList.toggle(styles['show-links'])
						}}>
							<i className="fas fa-bars"></i>
						</button>						
					</div>
				<ul className={styles.links}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/options'>Options</Link>
					</li>
				</ul>

				<ul className={styles["social-icons"]}>
					{/* <li>
						<a href="https://www.linkedin.com">
							<i className={`${styles["fab"]} ${styles["fa-linkedin"]}`}></i>
						</a>
					</li> */}
					<li>
						<a href="https://github.com/AlzursThunder" target='_blank'>
							<i className="fab fa-github"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>

		<Outlet />
		</>
	)
}

export default Menu