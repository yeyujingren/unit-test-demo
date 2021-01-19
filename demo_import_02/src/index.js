export function add(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw Error('该函数只接受数字作为参数！');
	}
	return a + b;
}


export const obj = {
	name: 'yeyu',
  age: 24
}

export function createObj () {
  return obj;
}

// 格式化回填图片。需要有uid
export const formatFileList = (arr) => {
  if (!Array.isArray(arr)) arr = [arr];
  return arr.map(item => {
    const tempArr = item.split('/');
    return {
      url: item,
      uid: tempArr[tempArr.length - 1],
      name: tempArr[tempArr.length - 1],
      // 用上传数据是筛选
      status: 'done'
    };
  });
};