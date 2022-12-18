import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
	// Create array of random numbers
	function newDice() {
		let diceArr = [];
		for (let x = 0; x < 10; x++) {
			let randomNumber = Math.floor(Math.random() * 6);
			let diceObj = { value: randomNumber, isHeld: false, id: nanoid() };
			diceArr.push(diceObj);
		}
		console.log(diceArr);
		return diceArr;
	}

	// Set state to the array of random numbers
	const [dice, setDice] = useState(newDice());

	// Render random numbers inside dice faces
	const diceElements = dice.map((die) => {
		return <Die value={die.value} key={die.id} />;
	});

	// On dice roll
	function rollDice() {
		setDice(newDice());
	}

	return (
		<main>
			<div className="dice-wrapper">{diceElements}</div>
			<button className="roll-dice-button" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}

export default App;
