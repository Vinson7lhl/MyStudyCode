let result = []
function array_intersection(arr1, arr2) {
  // 永远从短的数组进行遍历
  if (arr1.length < arr2.length) {
    for(let i = 0; i < arr1.length; i++) {
      // 如果匹配上了
      if(arr2.indexOf(arr1[i]) !== -1) {
        let arr2_index = arr2.indexOf(arr1[i])
        result.push(arr1[i])
        // 剔除长数组重复元素得到新元素
        arr2.splice(arr2_index, 1)
      }
      // 无论匹配上都要剔除短数组当下元素
      arr1.splice(i, 1)
      i = -1
    }
  } else {
    for(let i = 0; i < arr2.length; i++) {
      if(arr1.indexOf(arr2[i]) !== -1) {
        let arr1_index = arr1.indexOf(arr2[i])
        let arr2_index = i
        result.push(arr2[i])
        // 剔除重复元素得到新元素
        arr1.splice(arr1_index, 1)
      }
      arr2.splice(i, 1)
      i = -1
    }
  }
  return result
}