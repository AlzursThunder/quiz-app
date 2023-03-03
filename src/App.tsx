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
import { AppCont, Category, Question } from './utils/interfaces'
import { getData } from './utils/functions'

export const AppContext = createContext<AppCont>({
	isError: false,
	isLoading: false
})

const App: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)

	const [questions, setQuestions] = useState<Question[]>([])

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

  return (
			<AppContext.Provider
				value={{
					categories,
					isLoading,
					isError,
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
