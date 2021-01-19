import {getUser} from '../src/async';

test('getUser() 可以请求到一个对象，其中包括code和data，并且data中的interests是一个数组', async () => {
  // 它能确保在异步的测试用例中，有一个断言会在回调函数中被执行。
  // 这在进行异步代码的测试中十分有效。
	// expect.assertions(number) 
	// verifies that a certain number of assertions are called during a test. 
	// This is often useful when testing asynchronous code, 
	// in order to make sure that assertions in a callback actually got called
  // expect.assertions(1);
  const res = await getUser()
	expect(res.code).toBe(1);
	expect(res.data.interests).toEqual(expect.arrayContaining([]));
})
