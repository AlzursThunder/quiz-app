import React from 'react'
import { Question } from '../utils/interfaces'

interface QuestionElementProps {
	question: Question
}

const QuestionElement = (props: QuestionElementProps) => {
	const { question } = props
	return (
		<div></div>
	)
}

export default QuestionElement