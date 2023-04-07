import React, { createContext, useEffect, useState, } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Options from "./pages/Options";
import Arena from "./pages/Arena";
import NoPage from "./pages/NoPage";
import Menu from "./components/Menu";

// interfaces & functions
import {
	AppCont,
	Category,
	OptionsParams,
	Question,
} from "./utils/interfaces";
import { getData, } from "./utils/functions";

// main context used across main pages & components
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
});

const App: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const [options, setOptions] = useState<OptionsParams>({
		categoryId: "",
		diffLevel: "",
		questionNum: "",
	});

	const [questions, setQuestions] = useState<Question[]>([]);

	const click = (opt: OptionsParams) => {
		getData({
			isError: setIsError,
			isLoading: setIsLoading,
			options: opt,
			setState: setQuestions,
			text: "results",
		});
	};
	const location = useLocation()
	useEffect(() => {
		getData({
			setState: setCategories,
			text: "trivia_categories",
			isLoading: setIsLoading,
			isError: setIsError,
		});
	}, []);

	useEffect(() => {
		const body = document.querySelector('body')
		const path = location.pathname

		if (body) {
			if (path === '/' || path === '/options' || path === '/arena') {
				body.style.backgroundColor = "papayawhip";
			} else {
				body.style.backgroundColor = "black";
			}
			if (path === '/arena' && questions.length === 0) {
				body.style.backgroundColor = "black";
			}
		}		
	}, [location, questions])

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
						options: {
							categoryId: '',
							diffLevel: '',
							questionNum: ''
						},
						setState: setQuestions,
						text: "results",
					},
					randOpt: {
						categories,
						min: 5,
						max: 10,
					},
				},
			}}
		>
			{/* <BrowserRouter> */}
				<Routes>
					<Route path="/" element={<Menu />}>
						<Route index element={<Home />} />
						<Route path="/options" element={<Options />} />
						<Route path="/arena" element={<Arena />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			{/* </BrowserRouter> */}
		</AppContext.Provider>
	);
};

function AppWrapper() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

export default AppWrapper;
