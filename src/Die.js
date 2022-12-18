function Die(props) {
	return (
		<div className={`die ${props.isHeld && "active"}`}>
			<div className="die-text">{props.value}</div>
		</div>
	);
}

export default Die;
