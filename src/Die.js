function Die(props) {
	return (
		<div className={`die ${props.isHeld && "active"}`} onClick={props.holdDice}>
			<div className="die-text">{props.value}</div>
		</div>
	);
}

export default Die;
