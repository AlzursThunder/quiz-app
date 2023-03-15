import React, { createContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Options from "./pages/Options";
import Arena from "./pages/Arena";
import NoPage from "./pages/NoPage";

// interfaces
import {
	AppCont,
	Category,
	OptionsParams,
	Question,
	UserAnswer,
} from "./utils/interfaces";
import { getData, shuffleArray } from "./utils/functions";

export const AppContext = createContext<AppCont>({
	categories: [],
	options: {
		categoryId: "",
		diffLevel: "",
		questionNum: "",
	},
	isError: false,
	isLoading: false,
	questions: [],
	click: () => console.log(""),
	userAnswers: [],
});

const App: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const [options, setOptions] = useState<OptionsParams>({
		categoryId: "",
		diffLevel: "",
		questionNum: "5",
	});

	const [questions, setQuestions] = useState<Question[]>([]);
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
	const [finished, setFinished] = useState<boolean | string>('1')

	// const answerContainer = useRef<HTMLDivElement | undefined>();


	const click = (opt: OptionsParams) => {
		const link = `https://opentdb.com/api.php?amount=${opt.questionNum}&category=${opt.categoryId}&difficulty=${opt.diffLevel}`;

		getData({
			isError: setIsError,
			isLoading: setIsLoading,
			link,
			setState: setQuestions,
			text: "results",
		});
	};

	useEffect(() => {
		getData({
			link: "https://opentdb.com/api_category.php",
			// link: 'https://httpstat.us/404',
			setState: setCategories,
			text: "trivia_categories",
			isLoading: setIsLoading,
			isError: setIsError,
		});
	}, []);

	return (
		<AppContext.Provider
			value={{
				categories,
				isLoading,
				isError,
				options,
				setOptions,
				questions,
				setQuestions,
				click,
				RandQuestionsParams: {
					apiCall: {
						isError: setIsError,
						isLoading: setIsLoading,
						link: `https://opentdb.com/api.php?amount=${options.questionNum}&category=${options.categoryId}&difficulty=${options.diffLevel}`,
						setState: setQuestions,
						text: "results",
					},
					randOpt: {
						categories,
						min: 5,
						max: 10,
						setOptions,
					},
				},
				// answerContainer,
				userAnswers,
				setUserAnswers
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="/options" element={<Options />} />
						<Route path="/arena" element={<Arena />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
