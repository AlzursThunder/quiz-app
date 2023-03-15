import React from "react";
import {
	Api,
	Category,
	Changes,
	RandOptionsParams,
	RandQuestionsParams,
	UserAnswer,
	ValidInput,
} from "./interfaces";

// gets data from API
function getData(params: Api) {
	params.isLoading(true);
	fetch(params.link)
		.then((resp) => {
			params.isError(false);
			if (resp.status >= 200 && resp.status <= 299) {
				return resp.json();
			}
		})
		.then((data) => {
			params.setState(data[params.text]);
			params.isLoading(false);
		})
		.catch((error) => {
			// console.log(error);
			params.isError(true);
		});
}

// retusrs number from range <min, max>
const randNum = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

// use to handle changes from inputs
function handleChanges(params: Changes) {
	const { event, setState } = params;

	setState &&
		setState((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
}

// adds style to answer choosen by player
// and removes this style from any other answer
function highlightChoosenAnswer(
	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	id: string,
	styles: CSSModuleClasses,
	setUserAnswers?: React.Dispatch<React.SetStateAction<UserAnswer[]>>
) {
	const target = event.target as HTMLDivElement;
	const parent = target.parentElement;
	const ancestor = parent?.parentElement
	let tmpAnswers: UserAnswer[] = []
	if (ancestor) {
		for (let child of parent.children) {
			if (child.id === id) {
				child.classList.add(styles["answer--highlighted"]);
				tmpAnswers[parseInt(ancestor.id)] = {
					answer: child.textContent ? child.textContent : '',
					answerId: child.id
				};
				// console.log(tmpAnswers);
				
				setUserAnswers && setUserAnswers(prev => {
					prev[parseInt(ancestor.id)] = {
						answer: child.textContent ? child.textContent : "",
						answerId: child.id,
					};
					return prev
				})
			} else {
				child.classList.remove(styles['answer--highlighted'])
			}
		}		
	}
	// setUserAnswers && setUserAnswers(tmpAnswers)
}

// sets options state to random values
function getRandomOptions(params: RandOptionsParams) {
	const { categories, min, max, setOptions } = params;
	const diffLevels = ["", "easy", "medium", "hard"];
	const cat = categories;

	const questionsNumber = `${randNum(min, max)}`;
	const diff = diffLevels[randNum(0, diffLevels.length - 1)];
	const categoryId = randNum(0, cat.length);

	setOptions &&
		setOptions({
			categoryId: categoryId === cat.length ? "" : cat[categoryId].id,
			diffLevel: diff,
			questionNum: questionsNumber,
		});
}

// generates questions based on data provided by function getRandomOptions
function getRandQuestions(parameters: RandQuestionsParams) {
	const { randOpt, apiCall } = parameters;
	getRandomOptions(randOpt);
	getData(apiCall);
}

// shuffles order of array, so correct answer is no longer displayed first
function shuffleArray<T>(array: T[]): T[] {
	// Copy the original array to avoid modifying it directly
	const shuffledArray = [...array];

	// Loop through each element in the array
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		// Generate a random index from 0 to i
		const j = Math.floor(Math.random() * (i + 1));

		// Swap the current element with a randomly selected element
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}

	return shuffledArray;
}

const validateInput = (parameters: ValidInput) => {
	const { userData, validQuestionsNumber } = parameters
	const { min, max } = validQuestionsNumber

	if (outOfRange(min, max, parseInt(userData))) {
		return true
	}

	return false 
}
// helper function for validateInput func
// checks wheter number given, by user mets conditions
const outOfRange = (min: number, max: number, value: number) => {
	if (value >= min && value <= max) false

	return true
}

export {
	getData,
	randNum,
	handleChanges,
	highlightChoosenAnswer,
	getRandQuestions,
	shuffleArray,
	validateInput
};
