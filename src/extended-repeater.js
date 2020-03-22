module.exports = function repeater(str, options) {
	let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
	separator = separator || '+';
	additionSeparator = additionSeparator || '|';
	addition = (addition === false) ? 'false' : addition;
	addition = (addition === null) ? 'null' : addition;
	addition = addition || '';
	
	let newStr = new Array(additionRepeatTimes).fill(addition, 0)
	let string = str + newStr.join(additionSeparator);
	return new Array(repeatTimes).fill(string, 0).join(separator);
};
