module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let team = '';
	members.forEach(item => {
		if (typeof item === 'string') {
			team += item.trim().toUpperCase()[0];
		}
	});
	return team.split('').sort().join('');
};
