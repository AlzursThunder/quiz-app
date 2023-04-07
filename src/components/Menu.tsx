import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// styles
import styles from '../styles/styles-components/Menu.module.css'

const Menu = () => {

	return (
		<>
			<nav className={styles.nav}>
				<div className={styles['nav-center']}>
					<div className={styles["nav-header"]}>
						{/* <img src="/favicon.ico" className="logo" alt="logo" /> */}
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
						<li>
							<a href="https://github.com/AlzursThunder" target='_blank' rel='external'>
								<img height={'20px'} src='/github-mark.svg' alt='my GitHub' />
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