import React, { useState } from 'react'
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom'

import Home from './pages/Home'
import Options from './pages/Options'
import Arena from './pages/Arena'
import NoPage from './pages/NoPage'

const App: React.FC = () => {

  return (
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
	);
}

export default App
