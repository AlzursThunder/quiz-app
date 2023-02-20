import React from 'react'
import Button from '../components/Button'

const Home: React.FC = () => {
	return (
		<div>
			<h1>Quiz</h1>
			<div>
				<p>
					Welcome! <br /> Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Aperiam earum consequuntur asperiores. Obcaecati, maiores. Nemo,
					totam dolor tenetur error asperiores pariatur optio id necessitatibus
					amet ullam voluptates cupiditate at est.
				</p>
			</div>
			<div>
				<Button direction='options' buttonText='START' />
			</div>
		</div>
	);
};

export default Home