import Die from "./Die";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
	// Set state to the array of random numbers
	const [dice, setDice] = useState(newDice());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		let valuesArr = dice.map((die) => die.value);
		const allDieHeld = dice.every((die) => die.isHeld);
		const allDieEqual = new Set(valuesArr).size === 1;

		if (allDieHeld && allDieEqual) {
			setTenzies(true);
			console.log("You won!");
		}
	}, [dice]);

	// Create a die
	function generateNewDie() {
		let randomNumber = Math.floor(Math.random() * 6);
		return { value: randomNumber, isHeld: false, id: nanoid() };
	}

	// Create array of die objects
	function newDice() {
		let diceArr = [];
		for (let x = 0; x < 10; x++) {
			diceArr.push(generateNewDie());
		}
		return diceArr;
	}

	// Hold a die
	function holdDice(dieId) {
		setDice((oldDice) => {
			return oldDice.map((die) => {
				return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die;
			});
		});
	}

	// Roll dice
	function rollDice() {
		setDice((oldDice) => {
			return oldDice.map((die) => {
				return die.isHeld ? die : generateNewDie();
			});
		});
	}

	// Render random numbers inside dice faces
	let diceElements = dice.map((die) => {
		return (
			<Die
				value={die.value}
				key={die.id}
				isHeld={die.isHeld}
				holdDice={() => {
					holdDice(die.id);
				}}
			/>
		);
	});

	return (
		<main>
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			<div className="dice-wrapper">{diceElements}</div>
			<button className="roll-dice-button" onClick={rollDice}>
				Roll
			</button>
			<div
				className="aff-name"
				style={{ textAlign: "left", marginLeft: "2rem", fontSize: "15px" }}
			>
				{dice.length > 0 ? dice.length : <p>-</p>}
			</div>
		</main>
	);
}

export default App;
