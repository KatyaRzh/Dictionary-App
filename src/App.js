import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<Dictionary defaultKeyword="sunset" />
			<footer className="text-center">
				{" "}
				<small>Coded by Katya Rozhko</small>
			</footer>
		</div>
	);
}

export default App;
