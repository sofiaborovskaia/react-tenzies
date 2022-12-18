import Die from "./Die";
import { useState } from "react";

function App() {
	function newDice() {
		let diceArr = [];
		for (let x = 0; x < 10; x++) {
			let randomNumber = Math.floor(Math.random() * 6);
			diceArr.push(randomNumber);
		}

		return diceArr;
	}

	const [dice, setDice] = useState(newDice());

	const diceElements = dice.map((die) => {
		return <Die value={die} key={die} />;
	});

	return (
		<main>
			<div className="dice-wrapper">{diceElements}</div>
		</main>
	);
}

export default App;
