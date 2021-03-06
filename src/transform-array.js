module.exports = function transform(arr) {
	const result = [];
	
	if (!Array.isArray(arr)) throw new Error();
	
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-next':
				i++;
				break;
			case '--discard-prev':
				result.pop();
				break;
			case '--double-next':
				if (i < arr.length-1) result.push(arr[i + 1]);
				break;
			case '--double-prev':
				if (i) result.push(arr[i - 1]);
				break;
			default:
				result.push(arr[i]);
		};
	};
	return result;
};
