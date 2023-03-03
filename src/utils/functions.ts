import React from "react";
import { Api, Changes } from "./interfaces";

// gets data from API
function getData(params: Api) {
	fetch(params.link)
		.then(resp => {
			params.isError(false)
			if (resp.status >= 200 && resp.status <= 299) {
				return resp.json()
			}
		})
		.then(categories => {
			params.setState(categories[params.text])
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

}

export { getData, randNum ,};