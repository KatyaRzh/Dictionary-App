import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState({});

	function handleResponse(response) {
		setResults(response.data[0]);
		// console.log(response.data[0].meanings[0].definition[0].definition);
	}
	// documentation https://dictionaryapi.dev/
	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword}`);
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<h1>Dictionary</h1>
			<h3>What word do you wnat to look up?</h3>
			<form onSubmit={search}>
				<input type="search" onChange={handleKeywordChange} />
			</form>
			<Results results={results} />
		</div>
	);
}
