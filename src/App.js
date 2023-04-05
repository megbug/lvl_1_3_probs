
import './App.css';
import Data from './components/Data.js';

const toDoArr = [
	{
		elt: "send mail"
	},
	{
		elt: "lvl_1_3"
	},
	{
		elt: "eat tasty food"
	}
]

function App() {
	return (
		<div className="App">
			<h1>my ToDo's</h1>
			<Data
				item={toDoArr[0].elt}
			/>
			<Data
				item={toDoArr[1].elt}
			/>
			<Data
				item={toDoArr[2].elt}
			/>
		</div>
	);
}

export default App;

