module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	turns = Math.pow(2, disksNumber);
	seconds = turns / (turnsSpeed / 3600);
	return {turns, seconds};
}
