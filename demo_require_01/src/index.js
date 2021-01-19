module.exports = {
	add: function add(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw Error('该函数只接受数字作为参数！');
		}
		return a + b;
	}
}