import React from "react";

interface Api {
	link: string;
	setState:
		| React.Dispatch<React.SetStateAction<Category[]>>
		| React.Dispatch<React.SetStateAction<Question[]>>;
	text: string;
	isLoading: React.Dispatch<React.SetStateAction<boolean>>;
	isError: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Category {
	id: string
	name: string
}

interface Question {
	category: string
	type: string
	difficulty: string
	question: string
	correct_answer: string
	incorrect_answers: string[]
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
	randQuestionsParams?: randQuestionsParams;
	userAnswers: UserAnswer[];
	setUserAnswers?: React.Dispatch<React.SetStateAction<UserAnswer[]>>;
}

interface Changes {
	event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>;
	setState?: React.Dispatch<React.SetStateAction<OptionsParams>>;
}

interface OptionsParams {
	questionNum: string
	categoryId: string
	diffLevel: string
}

interface UserAnswer {
	answer: string
	correct_answer: string
}

interface randOptionsParams {
	setOptions?: React.Dispatch<React.SetStateAction<OptionsParams>>
	categories: Category[]
	min: number
	max: number
}

interface randQuestionsParams {
	randOpt: randOptionsParams
	apiCall: Api
}

export type {
	Api,
	Category,
	Question,
	AppCont,
	Changes,
	OptionsParams,
	UserAnswer,
	randOptionsParams,
	randQuestionsParams
}