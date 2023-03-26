import React from "react";

interface Api {
	options?: OptionsParams;
	setState:
		| React.Dispatch<React.SetStateAction<Category[]>>
		| React.Dispatch<React.SetStateAction<Question[]>>;
	text: string;
	isLoading: React.Dispatch<React.SetStateAction<boolean>>;
	isError: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Category {
	id: string;
	name: string;
}

interface Question {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
	all_answers: string[]
}

interface AppCont {
	categories: Category[];
	options: OptionsParams;
	setOptions?: React.Dispatch<React.SetStateAction<OptionsParams>>;
	questions: Question[];
	setQuestions?: React.Dispatch<React.SetStateAction<Question[]>>;
	isLoading: boolean;
	isError: boolean;
	click: (options: OptionsParams) => void;
	RandQuestionsParams?: RandQuestionsParams;
}

interface Changes {
	event:
		| React.ChangeEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLSelectElement>;
	setState?: React.Dispatch<React.SetStateAction<OptionsParams>>;
}

interface OptionsParams {
	questionNum: string;
	categoryId: string;
	diffLevel: string;
}

interface UserAnswer {
	answer: string;
	answerId: string
	isCorrect: boolean
	// parentId: string
}

interface RandOptionsParams {
	categories: Category[];
	min: number;
	max: number;
}

interface RandQuestionsParams {
	randOpt: RandOptionsParams;
	apiCall: Api;
}

interface ValidInput {
	userData: string;
	validQuestionsNumber: {
		min: number;
		max: number;
	};
	// isValid: boolean
}

interface Points {
	answered: number,
	correct: number,
	overall: number
}

export type {
	Api,
	Category,
	Question,
	AppCont,
	Changes,
	OptionsParams,
	UserAnswer,
	RandOptionsParams,
	RandQuestionsParams,
	ValidInput,
	Points
};
