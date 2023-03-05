import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';
import ErrorMsg from '../components/ErrorMsg';
import Loading from '../components/Loading';

const Arena: React.FC = () => {
	const { isError, isLoading, questions } = useContext(AppContext)

	// useEffect(() => {
	// 	console.log(questions);
		
	// }, [questions])

	if (isError) {
		return <ErrorMsg />
	}

	if (isLoading) {
		return <Loading />
	}

	return <div>Arena</div>;
};

export default Arena