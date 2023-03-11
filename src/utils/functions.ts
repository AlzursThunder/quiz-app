import React from "react";
import { Api, Category, Changes, randOptionsParams, randQuestionsParams } from "./interfaces";

// gets data from API
function getData(params: Api) {
	params.isLoading(true)
	fetch(params.link)
		.then(resp => {
			params.isError(false)
			if (resp.status >= 200 && resp.status <= 299) {
				return resp.json()
			}
		})
		.then(data => {
			params.setState(data[params.text])
			params.isLoading(false)
		})
		.catch((error) => {
			// console.log(error);
			params.isError(true)
		})
}

// retusrs number from range <min, max)
const randNum = (min: number, max: number) => Math.floor(Math.random() * (max - min))

// use to handle changes from inputs
function handleChanges(params: Changes) {
	const {event, setState} = params

	setState && setState(prev => ({
		...prev,
		[event.target.name]: event.target.value
	}))
}

function getRandomOptions(params: randOptionsParams) {
	const { categories, min, max, setOptions} = params
	const diffLevels = ['', 'easy', 'medium', 'hard']
	const cat = categories

	const questionsNumber = `${randNum(min, max)}`
	const diff = diffLevels[randNum(0, diffLevels.length)]
	const categoryId = randNum(0, cat.length + 1)
	
	setOptions && setOptions({
		categoryId: categoryId === cat.length ? '' : cat[categoryId].id,
		diffLevel: diff,
		questionNum: questionsNumber
	})
}

function getRandQuestions(parameters: randQuestionsParams) {	
	const { randOpt, apiCall } = parameters
	getRandomOptions(randOpt)
	getData(apiCall)
}

export { getData, randNum , handleChanges, getRandomOptions, getRandQuestions };