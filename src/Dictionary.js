import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");

	function handleResponse(response) {
		console.log(response.data[0]);
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
		</div>
	);
}
