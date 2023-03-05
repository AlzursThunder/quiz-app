import React, { createContext, useEffect, useState } from 'react'
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom'

import Home from './pages/Home'
import Options from './pages/Options'
import Arena from './pages/Arena'
import NoPage from './pages/NoPage'

// interfaces
import { AppCont, Category, OptionsParams, Question } from './utils/interfaces'
import { getData, } from './utils/functions'
export const AppContext = createContext<AppCont>({
	isError: false,
	isLoading: false,
	click: () => console.log('')
	
});

const App: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)

	const [options, setOptions] = useState<OptionsParams>({
		categoryId: '',
		diffLevel: 'bruh',
		questionNum: ''
	})

	const [questions, setQuestions] = useState<Question[]>([])

	const click = (opt?: OptionsParams) => {
		const link = opt && `https://opentdb.com/api.php?amount=${opt.questionNum}&category=${opt.categoryId}&difficulty=${opt.diffLevel}`
		
		getData({
			isError: setIsError,
			isLoading: setIsLoading,
			link: link ? link : '',
			setState: setQuestions,
			text: "results",
		});
	}

	useEffect(() => {
		getData({
			link: "https://opentdb.com/api_category.php",
			// link: 'https://httpstat.us/404',
			setState: setCategories,
			text: "trivia_categories",
			isLoading: setIsLoading,
			isError: setIsError,
		});
	}, [])

	// useEffect(() => {
	// 	console.log(options);
		
	// }, [options])

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
}

export default App
