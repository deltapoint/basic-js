const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	let parsedSampleActivity = parseFloat(sampleActivity);
	if (typeof sampleActivity === 'string' && !isNaN(parsedSampleActivity) && Number(parsedSampleActivity) < MODERN_ACTIVITY && Number(parsedSampleActivity) > 0) {
		return Math.ceil(Math.log(MODERN_ACTIVITY / parsedSampleActivity) / (0.693 / HALF_LIFE_PERIOD));
	} else {
		return false;
	}
};
