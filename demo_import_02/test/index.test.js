import {add, createObj, obj, formatFileList} from '../src/index';

// 具体断言见https://jestjs.io/docs/zh-Hans/expect

// 常见断言
// .not
test('add(2 + 2) not equal 5', () => {
  expect(add(2, 2)).not.toBe(5);
})

// .toEqual()
// .toEqual匹配器会递归的检查对象所有属性和属性值是否相等，
// 所以如果要进行应用类型的比较时，应该使用.toEqual匹配器而不是.toBe
test('createObj返回的对象深度相等', () => {
	const expectResult = {
		name: 'yeyu',
		age: 24
	}
  expect(createObj()).toEqual(expectResult);
})

// .toBe()
// 校验对象内存地址不同
test('createObj返回的对象内存地址不同', () => {
	const expectResult = {
		name: 'yeyu',
		age: 24
	}
  expect(createObj()).not.toBe(expectResult);
})

// .toBe()
// 校验对象内存地址不同
test('createObj返回的对象内存地址相同', () => {
  expect(createObj()).toBe(obj);
})

// .toHaveLength可以很方便的用来测试字符串和数组类型的长度是否满足预期
test('formatFileList("http://pic.png")返回的数组长度为1', () => {
	const payload = 'http://pic.png'
	expect(formatFileList(payload)).toHaveLength(1);
})

test('formatFileList("http://pic.png")返回的预期array', () => {
	const payload = 'http://pic.png'
	const expectResult = [{
		url: 'http://pic.png',
		uid: 'pic.png',
		name: 'pic.png',
		status: 'done'
	}]
	expect(formatFileList(payload)).toEqual(expectResult);
})

test('formatFileList(["http://pic.png"])返回的预期array', () => {
	const payload = ['http://pic.png']
	const expectResult = [{
		url: 'http://pic.png',
		uid: 'pic.png',
		name: 'pic.png',
		status: 'done'
	}]
	expect(formatFileList(payload)).toEqual(expectResult);
})

// .toMatch传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配
test('createObj().name应该包含"ye"这个字符', () => {
  expect(createObj().name).toMatch(/ye/i);
})

// toBeNull 只匹配 null
// toBeUndefined 只匹配 undefined
// toBeDefined 与 toBeUndefined 相反
// toBeTruthy 匹配任何 if 语句为真
// toBeFalsy 匹配任何 if 语句为假
