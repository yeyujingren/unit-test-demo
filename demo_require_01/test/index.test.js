const index = require('../src/index');

// expect函数用来包装被测试的方法并返回一个对象，
// 该对象中包含一系列的匹配器来让我们更方便的进行断言，
// 下面的toBe函数即为一个匹配器
test('1+1=2', () => {
  expect(index.add(1, 1)).toBe(2);
})

// .toThorw可能够让我们测试被测试方法是否按照预期抛出异常，
// 但是在使用时需要注意的是：我们必须使用一个函数将将被测试的函数做一个包装，
// 正如下面getThrowErrExceptStrFn所做的那样，否则会因为函数抛出导致该断言失败。
test('a + 2 应该报错', () => {
	function getThrowErrExceptStrFn() {
		index.add('a', 1);
	}
	expect(getThrowErrExceptStrFn).toThrow("该函数只接受数字作为参数！");
})
