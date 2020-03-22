module.exports = class DepthCalculator {
	calculateDepth(arr) {
		if (Array.isArray(arr)) {
			let res = 0;
			arr.forEach(item => {
				res = Math.max(this.calculateDepth(item), res);
			});
			return res + 1;
		}
		return 0;
	}
};
