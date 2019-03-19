let resultArr = [];
export const formData = (dataArr) => {
  dataArr.forEach(function (item, index) {
    if (item.children) {
      // console.log(item.children)
      formData(item.children);
    }
    resultArr.push({
      name: item.label,
      value: item.value
    })
  })
  return resultArr;
}